import { t } from '#/controllers/trpc';
import { responseList } from '#/controllers/trpc/router/response';
import { usersResource } from '#/controllers/trpc/router/users';
import { dz } from '#/repositories/db';
import { usersTable } from '#/repositories/db/schema';
import { selectCount } from '#/repositories/db/schema/utils';
import { SQLiteSelectBuilder, SelectedFields } from 'drizzle-orm/sqlite-core';
import { z } from 'zod';

export const QueryUsersRequestZod = z.object({
  limit: z.number().default(100),
  offset: z.number().default(0),
});

export type QueryUsersRequest = z.infer<typeof QueryUsersRequestZod>;

export const queryUsersRouter = t.router({
  [`${usersResource}` as const]: t.procedure
    .input(QueryUsersRequestZod)
    .query(async (req) => {
      function usersQuery<
        T extends SelectedFields | undefined,
        U extends 'async' | 'sync',
        V,
      >(select: SQLiteSelectBuilder<T, U, V>) {
        return select.from(usersTable);
      }

      const users = await usersQuery(dz.select())
        .limit(req.input.limit)
        .offset(req.input.limit);
      const count = await usersQuery(dz.select(selectCount()));

      return responseList(users, count[0].count);
    }),
});
