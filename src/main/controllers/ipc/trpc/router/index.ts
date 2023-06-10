import { t } from '#/controllers/ipc/trpc';
import { currentWindowFocusRouter } from '#/controllers/ipc/trpc/router/currentWindow/focus';
import { queryUsersRouter } from '#/controllers/ipc/trpc/router/users/queryUsers';

export const appTrpcRouter = t.mergeRouters(
  // currentWindow
  currentWindowFocusRouter,
  // user
  queryUsersRouter,
);

export type AppRouter = typeof appTrpcRouter;
