import { MainWindow } from '#/presentations/window/MainWindow';
import { DB_HOST } from '#/repositories/db/host';
import { Env } from '$/config/env';
import { wait } from '$/utils/wait';
import { seed } from '#/repositories/db/seed/seed';
import { electronApp, optimizer } from '@electron-toolkit/utils';
import { execFile } from 'child_process';
import { BrowserWindow, RelaunchOptions, app } from 'electron';
import path from 'path';
import { promisify } from 'util';

async function initPrisma(): Promise<void> {
  if (!Env.VITE_BUILDED) {
    return;
  }
  const toolDir = app.getAppPath();

  const prismaCli = path.join(
    toolDir,
    'node_modules',
    'prisma',
    'build',
    'index.js',
  );

  const execFilePromise = promisify(execFile);
  await execFilePromise(prismaCli, ['migrate', 'deploy'], {
    cwd: app.getAppPath(),
    env: {
      ...process.env,
      DATABASE_URL: `file:${DB_HOST}`,
    },
  });

  const options: RelaunchOptions = {
    args: process.argv.slice(1).concat(['--relaunch']),
    execPath: process.execPath,
  };

  // FIXME: うまく行かなすぎると無限再起動かかるので治す
  // Fix for .AppImage
  if (app.isPackaged && process.env.APPIMAGE) {
    execFile(process.env.APPIMAGE, options.args);
    void wait(1000).then(() => {
      app.quit();
    });
    return;
  }
  app.relaunch(options);
  void wait(1000).then(() => {
    app.quit();
  });
}

async function createWindow(): Promise<void> {
  // Create the browser window.
  const mainWindow = new MainWindow();
  mainWindow;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
void app.whenReady().then(async () => {
  try {
    try {
      await seed();
    } catch (e) {
      console.error(e);
      await initPrisma();
    }

    // Set app user model id for windows
    electronApp.setAppUserModelId('com.electron');

    // Default open or close DevTools by F12 in development
    // and ignore CommandOrControl + R in production.
    // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
    app.on('browser-window-created', (_, window) => {
      optimizer.watchWindowShortcuts(window);
    });

    await createWindow();

    app.on('activate', async () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) await createWindow();
    });
  } catch (e) {
    console.error(e);
  }
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
