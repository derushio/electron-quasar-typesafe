import { env } from '$/env';
import { timeout } from '$/utils/timeout';
import { ChildProcess, fork } from 'child_process';
import { BrowserWindow, app, nativeTheme } from 'electron';
import os from 'os';
import path from 'path';

// needed in case process is undefined under Linux
const platform = process.platform || os.platform();

try {
  if (platform === 'win32' && nativeTheme.shouldUseDarkColors === true) {
    require('fs').unlinkSync(
      path.join(app.getPath('userData'), 'DevTools Extensions'),
    );
  }
} catch (_) {}

let nuxtProcess: ChildProcess | undefined;
let mainWindow: BrowserWindow | undefined;

async function createWindow() {
  console.log(env.DEBUGGING);
  if (!env.DEBUGGING) {
    nuxtProcess = fork('./.output/server/index.mjs', {
      cwd: app.getAppPath(),
    });
  }

  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
    width: 1000,
    height: 600,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-webpack/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, 'electron-preload.ts'),
    },
  });

  let success = false;
  do {
    try {
      await mainWindow.loadURL(env.APP_URL);
      success = true;
    } catch {
      success = false;
      await timeout(100);
    }
  } while (!success);

  if (env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools();
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow?.webContents.closeDevTools();
    });
  }

  mainWindow.on('closed', () => {
    nuxtProcess?.kill();
    nuxtProcess = undefined;

    mainWindow = undefined;
  });
}

void app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === undefined) {
    void createWindow();
  }
});
