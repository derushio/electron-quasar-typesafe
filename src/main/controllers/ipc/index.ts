import { appTrpcRouter } from '#/controllers/trpc/router';
import { store } from '#/infrastructures/state';
import { createIPCHandler } from 'electron-trpc/main';

export const ipcHandler = createIPCHandler({
  router: appTrpcRouter,
  windows: [],
});
store.mutations.setIpcHandler(ipcHandler);
