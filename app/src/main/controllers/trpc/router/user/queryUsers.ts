import { t, tp } from '#/controllers/trpc';
import {
  generateAuthFailedError,
  responseList,
} from '#/controllers/trpc/router/response';
import { userResource } from '#/controllers/trpc/router/user';
import { subDbDz } from '#/infrastructures/db/subDb';
import { usersTable } from '#/infrastructures/db/subDb/schema';
import { PRIVATE_MASK } from '#/utils/hash';
import { pgSelectCount } from '#/utils/pg';
import { and, like } from 'drizzle-orm';
import { PgSelect } from 'drizzle-orm/pg-core';
import { z } from 'zod';

export const QueryUsersRequestZod = z.object({
  limit: z.number().default(100),
  offset: z.number().default(0),
  emailLike: z.string().optional(),
});

export type QueryUsersRequest = z.infer<typeof QueryUsersRequestZod>;

export const queryUsersRouter = t.router({
  [`${userResource}/query` as const]: tp
    .input(QueryUsersRequestZod)
    .query(async (req) => {
      if (!req.ctx.user) {
        throw generateAuthFailedError();
      }

      function buildWhere<T extends PgSelect>(select: T) {
        return select.where(
          and(
            ...[
              req.input.emailLike
                ? like(usersTable.email, `%${req.input.emailLike}%`)
                : undefined,
            ].filter((v) => !!v),
          ),
        );
      }

      let users = await buildWhere(subDbDz.select().from(usersTable).$dynamic())
        .limit(req.input.limit)
        .offset(req.input.offset);
      const count = (
        await buildWhere(
          subDbDz.select(pgSelectCount()).from(usersTable).$dynamic(),
        )
      )[0].count;

      users = users.map((v) => {
        return {
          ...v,
          passwordHash: PRIVATE_MASK,
        };
      });

      return responseList(req.ctx, users, count);
    }),
});
