import { appTrpcRouter } from '#/controllers/ipc/trpc/router';
import { store } from '#/repositories/state';
import { createIPCHandler } from 'electron-trpc/main';

export const ipcHandler = createIPCHandler({
  router: appTrpcRouter,
  windows: [],
});
store.mutations.setIpcHandler(ipcHandler);
