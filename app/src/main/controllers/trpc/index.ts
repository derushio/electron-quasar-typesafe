import { NewToken } from '#/controllers/trpc/router/response';
import { subDbDz } from '#/infrastructures/db/subDb';
import {
  userSessionsTable,
  usersTable,
} from '#/infrastructures/db/subDb/schema';
import { PRIVATE_MASK, sha512 } from '#/utils/hash';
import { initTRPC } from '@trpc/server';
import { NodeHTTPCreateContextFnOptions } from '@trpc/server/adapters/node-http';
import {
  experimental_createMemoryUploadHandler,
  experimental_isMultipartFormDataRequest,
  experimental_parseMultipartFormData,
} from '@trpc/server/adapters/node-http/content-type/form-data';
import { addDays, addMonths } from 'date-fns';
import { desc, eq } from 'drizzle-orm';
import { Request, Response } from 'express';
import superjson from 'superjson';
import { v4 as uuidv4 } from 'uuid';

export async function createContext(
  opts: NodeHTTPCreateContextFnOptions<Request, Response>,
) {
  const accessToken = opts.req.headers['x-access-token'] as string | undefined;
  const resetToken = opts.req.headers['x-reset-token'] as string | undefined;

  let session: typeof userSessionsTable.$inferSelect | undefined;
  let user: typeof usersTable.$inferSelect | undefined;
  let newToken: NewToken | undefined;

  // アクセストークン処理
  if (accessToken) {
    session = (
      await subDbDz
        .select()
        .from(userSessionsTable)
        .where(eq(userSessionsTable.accessTokenHash, sha512(accessToken)))
        .orderBy(desc(userSessionsTable.accessTokenExpireAt))
    ).shift();

    if (
      session &&
      session.accessTokenExpireAt.getTime() < new Date().getTime()
    ) {
      // アクセストークンが切れている
      if (
        session.resetTokenHash === sha512(resetToken ?? '') &&
        session.resetTokenExpireAt.getTime() >= new Date().getTime()
      ) {
        // リセットトークン
        newToken = {
          accessToken: uuidv4(),
          resetToken: uuidv4(),
        };
        session = (
          await subDbDz
            .update(userSessionsTable)
            .set({
              accessTokenHash: sha512(newToken.accessToken),
              accessTokenExpireAt: addDays(new Date(), 1),
              resetTokenHash: sha512(newToken.accessToken),
              resetTokenExpireAt: addMonths(new Date(), 1),
            })
            .returning()
        ).shift();
      } else {
        // リセットトークン不良
        session = undefined;
      }
    }

    // session情報からユーザーを取得
    if (session) {
      user = (
        await subDbDz
          .select()
          .from(usersTable)
          .where(eq(usersTable.id, session.userId))
      ).shift();
      if (user) {
        user.passwordHash = PRIVATE_MASK;
      }
    }
  }

  return { req: opts.req, session, user, newToken };
}

/** router定義用 */
export const t = initTRPC.context<typeof createContext>().create({
  transformer: superjson,
});

/** method定義用 (json) */
export const tp = t.procedure;

/** method定義用 (formdata) */
export const tpf = tp.use(async (opts) => {
  if (!experimental_isMultipartFormDataRequest(opts.ctx.req)) {
    return opts.next();
  }

  const formData = await experimental_parseMultipartFormData(
    opts.ctx.req,
    experimental_createMemoryUploadHandler({
      maxPartSize: 1 * 1024 * 1024 * 1024,
    }),
  );

  return opts.next({
    rawInput: formData,
  });
});
