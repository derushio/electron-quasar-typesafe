import { t } from '#/controllers/ipc/trpc';
import { responseList } from '#/controllers/ipc/trpc/router/response';
import { usersResource } from '#/controllers/ipc/trpc/router/users';
import { pc } from '#/repositories/prisma';
import { z } from 'zod';

export const queryUsersRequestZod = z.object({
  limit: z.number().default(100),
  offset: z.number().default(0),
});

export type queryUsersRequest = z.infer<typeof queryUsersRequestZod>;

export const queryUsers = t.router({
  [`${usersResource}/users` as const]: t.procedure
    .input(queryUsersRequestZod)
    .query(async (req) => {
      const where = {};

      return responseList(
        await pc.user.findMany({
          where,
          take: req.input.limit,
          skip: req.input.offset,
        }),
        await pc.user.count({
          where,
        }),
      );
    }),
});
