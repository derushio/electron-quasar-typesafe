import { t } from '#/domains/ipc';
import { currentWindowFocusRouter } from '#/domains/ipc/router/currentWindow/focus';

export const appTrpcRouter = t.mergeRouters(
  // currentWindow
  currentWindowFocusRouter,
);

export type AppRouter = typeof appTrpcRouter;
