import { t } from '#/controllers/trpc';
import { responseList } from '#/controllers/trpc/router/response';
import { usersResource } from '#/controllers/trpc/router/users';
import { kc } from '#/repositories/knex';
import { getCountNumber } from '#/repositories/knex/getCountNumber';
import { User } from '@prisma/client';
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
      const qb = kc.from('User').select();
      const results = (await qb
        .limit(req.input.limit)
        .offset(req.input.offset)) as User[];

      return responseList(results, getCountNumber(await qb.count()));
    }),
});
