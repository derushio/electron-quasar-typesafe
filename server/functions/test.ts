import { app } from 'electron';
import fs from 'fs';

export async function serverFunctionTest() {
  // return await fs.promises.readdir('.');
  return [app.getVersion()];
}
