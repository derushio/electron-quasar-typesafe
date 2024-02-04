import { MAIN_DB_HOST } from '#/infrastructures/db/mainDb/host';
import BetterSqlite3 from 'better-sqlite3';
import { mkdirpSync } from 'mkdirp';
import path from 'path';

function newBetterSqlite3() {
  return new BetterSqlite3(MAIN_DB_HOST);
}

let mainDbCon: BetterSqlite3.Database;

try {
  mainDbCon = newBetterSqlite3();
} catch {
  mkdirpSync(path.dirname(MAIN_DB_HOST));
}

mainDbCon = newBetterSqlite3();

export { mainDbCon };
