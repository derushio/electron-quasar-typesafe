import { t } from '#/controllers/trpc';
import { currentWindowFocusRouter } from '#/controllers/trpc/router/currentWindow/focus';
import { queryUsersRouter } from '#/controllers/trpc/router/user/queryUsers';

export const appTrpcRouter = t.mergeRouters(
  // currentWindow
  currentWindowFocusRouter,
  // user
  queryUsersRouter,
);

export type AppRouter = typeof appTrpcRouter;
