import { store } from '#/repositories/state';
import icon from '&/resources/icon.png';
import { is } from '@electron-toolkit/utils';
import { BrowserWindow, shell } from 'electron';
import path from 'path';

export class MainWindow extends BrowserWindow {
  public constructor() {
    super({
      width: 900,
      height: 670,
      show: false,
      autoHideMenuBar: true,
      ...(process.platform === 'linux' ? { icon } : {}),
      webPreferences: {
        preload: path.join(__dirname, '../preload/index.js'),
        sandbox: false,
      },
    });
    store.mutations.setCurrentWindow(this);

    this.on('focus', () => {
      store.mutations.setCurrentWindow(this);
    });

    this.on('ready-to-show', () => {
      this.show();
    });

    this.webContents.setWindowOpenHandler((details) => {
      void shell.openExternal(details.url);
      return { action: 'deny' };
    });

    this.webContents.openDevTools();

    // HMR for renderer base on electron-vite cli.
    // Load the remote URL for development or the local html file for production.
    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
      void this.loadURL(process.env['ELECTRON_RENDERER_URL']);
    } else {
      void this.loadFile(path.join(__dirname, '../renderer/index.html'));
    }
  }

  public close() {
    store.mutations.setCurrentWindow(null);

    super.close();
  }
}
