import { t } from '#/controllers/trpc';
import { responseList } from '#/controllers/trpc/router/response';
import { usersResource } from '#/controllers/trpc/router/users';
import { dz } from '#/infrastructures/db';
import { usersTable } from '#/infrastructures/db/schema';
import { selectCount } from '#/infrastructures/db/schema/utils';
import {
  SQLiteSelect,
  SQLiteSelectBuilder,
  SelectedFields,
} from 'drizzle-orm/sqlite-core';
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
      function whereBuild(select: SQLiteSelect) {
        // TODO: where
        return select;
      }

      const users = await whereBuild(dz.select().from(usersTable).$dynamic())
        .limit(req.input.limit)
        .offset(req.input.offset);
      const count = await whereBuild(
        dz.select(selectCount()).from(usersTable).$dynamic(),
      );

      return responseList(users, count[0].count);
    }),
});
