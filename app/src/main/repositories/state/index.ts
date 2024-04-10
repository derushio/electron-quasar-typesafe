import { BrowserWindow } from 'electron';

export const store = {
  states: {
    currentWindow: null as BrowserWindow | null,
  },
  mutations: {
    setCurrentWindow: (currentWindow: BrowserWindow | null) => {
      store.states.currentWindow = currentWindow;
    },
  },
};
