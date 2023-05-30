import * as fs from 'fs';

export async function serverFunctionTest() {
  return await fs.promises.readdir('.');
}
