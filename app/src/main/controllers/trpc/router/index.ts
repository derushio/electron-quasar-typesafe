import { t } from '#/controllers/trpc';
import { currentWindowFocusRouter } from '#/controllers/trpc/router/currentWindow/focus';
import { queryPostsRouter } from '#/controllers/trpc/router/post/queryPost';
import { queryUsersRouter } from '#/controllers/trpc/router/user/queryUsers';

export const appTrpcRouter = t.mergeRouters(
  // currentWindow electron
  currentWindowFocusRouter,
  // user postgres
  queryUsersRouter,
  // post sqlite
  queryPostsRouter,
);

export type AppRouter = typeof appTrpcRouter;
