import { sl3con } from '#/infrastructures/db/db';
import * as schema from '#/infrastructures/db/schema';
import { drizzle } from 'drizzle-orm/better-sqlite3';

/**
 * drizzle sqlite3 client
 */
export const dz = drizzle(sl3con, { schema });
