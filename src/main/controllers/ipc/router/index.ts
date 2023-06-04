import { t } from '#/controllers/ipc';
import { currentWindowFocusRouter } from '#/controllers/ipc/router/currentWindow/focus';

export const appTrpcRouter = t.mergeRouters(
  // currentWindow
  currentWindowFocusRouter,
);

export type AppRouter = typeof appTrpcRouter;
