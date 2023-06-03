import { BrowserWindow } from 'electron';
import { createIPCHandler } from 'electron-trpc/main';

type IpcHandler = ReturnType<typeof createIPCHandler>;

export const store = {
  states: {
    currentWindow: null as BrowserWindow | null,
    ipcHandler: null as IpcHandler | null,
  },
  mutations: {
    setCurrentWindow: (currentWindow: BrowserWindow | null) => {
      store.states.currentWindow = currentWindow;
    },
    setIpcHandler: (ipcHandler: IpcHandler | null) => {
      store.states.ipcHandler = ipcHandler;
    },
  },
};
