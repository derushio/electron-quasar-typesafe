import { mainDbCon } from '#/infrastructures/db/mainDb/db';
import { drizzle } from 'drizzle-orm/better-sqlite3';

/**
 * drizzle sqlite3 client
 */
export const mainDbDz = drizzle(mainDbCon);
