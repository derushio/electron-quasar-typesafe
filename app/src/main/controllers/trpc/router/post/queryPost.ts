import { t, tp } from '#/controllers/trpc';
import { postResource } from '#/controllers/trpc/router/post';
import { responseList } from '#/controllers/trpc/router/response';
import { mainDbDz } from '#/infrastructures/db/mainDb';
import { postsTable } from '#/infrastructures/db/mainDb/schema/tables/postsTable';
import { sqliteSelectCount } from '#/utils/sqlite';
import { SQLiteSelect } from 'drizzle-orm/sqlite-core';
import { z } from 'zod';

export const QueryPostsRequestZod = z.object({
  limit: z.number().default(100),
  offset: z.number().default(0),
});

export type QueryPostsRequest = z.infer<typeof QueryPostsRequestZod>;

export const queryPostsRouter = t.router({
  [`${postResource}/query` as const]: tp
    .input(QueryPostsRequestZod)
    .query(async (req) => {
      function buildWhere<T extends SQLiteSelect>(select: T) {
        return select;
      }

      const posts = await buildWhere(
        mainDbDz.select().from(postsTable).$dynamic(),
      )
        .limit(req.input.limit)
        .offset(req.input.offset);
      const count = (
        await buildWhere(
          mainDbDz.select(sqliteSelectCount()).from(postsTable).$dynamic(),
        )
      )[0].count;

      return responseList(req.ctx, posts, count);
    }),
});
