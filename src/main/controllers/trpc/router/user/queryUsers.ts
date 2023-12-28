import { t } from '#/controllers/trpc';
import { responseList } from '#/controllers/trpc/router/response';
import { userResource } from '#/controllers/trpc/router/user';
import { dz } from '#/infrastructures/db';
import { usersTable } from '#/infrastructures/db/schema';
import { selectCount } from '#/infrastructures/db/schema/utils';
import { SQLiteSelect } from 'drizzle-orm/sqlite-core';
import { z } from 'zod';

export const QueryUsersRequestZod = z.object({
  limit: z.number().default(100),
  offset: z.number().default(0),
});

export type QueryUsersRequest = z.infer<typeof QueryUsersRequestZod>;

export const queryUsersRouter = t.router({
  [`${userResource}/query` as const]: t.procedure
    .input(QueryUsersRequestZod)
    .query(async (req) => {
      function buildWhere<T extends SQLiteSelect>(select: T) {
        // TODO: where
        return select;
      }

      const users = await buildWhere(dz.select().from(usersTable).$dynamic())
        .limit(req.input.limit)
        .offset(req.input.offset);
      const count = (
        await buildWhere(dz.select(selectCount()).from(usersTable).$dynamic())
      )[0].count;

      return responseList(users, count);
    }),
});
