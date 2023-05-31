import fs from 'fs';

// import { app } from 'electron';

export async function serverFunctionTest() {
  return await fs.promises.readdir('.');
  // return app.getVersion();
}
