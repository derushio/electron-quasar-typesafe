import { DB_HOST } from '#/repositories/db/host';
import BetterSqlite3 from 'better-sqlite3';

export const sl3con = new BetterSqlite3(DB_HOST);
