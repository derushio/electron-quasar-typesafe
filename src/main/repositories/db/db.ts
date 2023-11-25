import { DB_HOST } from '#/repositories/db/host';
import BetterSqlite3 from 'better-sqlite3';
import { mkdirpSync } from 'mkdirp';
import path from 'path';

function newBetterSqlite3() {
  return new BetterSqlite3(DB_HOST);
}

let sl3con: BetterSqlite3.Database;

try {
  sl3con = newBetterSqlite3();
} catch {
  mkdirpSync(path.dirname(DB_HOST));
}

sl3con = newBetterSqlite3();

export { sl3con };
