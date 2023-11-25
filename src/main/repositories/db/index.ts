import { DB_HOST } from '#/repositories/db/host';
import * as schema from '#/repositories/db/schema';
import BetterSqlite3 from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';

const connection = new BetterSqlite3(DB_HOST);

/**
 * drizzle sqlite3 client
 */
export const sl3 = drizzle(connection, { schema });
