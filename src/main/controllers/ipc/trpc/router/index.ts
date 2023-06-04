import { t } from '#/controllers/ipc/trpc';
import { currentWindowFocusRouter } from '#/controllers/ipc/trpc/router/currentWindow/focus';

export const appTrpcRouter = t.mergeRouters(
  // currentWindow
  currentWindowFocusRouter,
);

export type AppRouter = typeof appTrpcRouter;
