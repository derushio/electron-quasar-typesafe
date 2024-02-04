import { subDbPool } from '#/infrastructures/db/subDb/db';
import { drizzle } from 'drizzle-orm/node-postgres';

/**
 * drizzle postgres client
 */
export const subDbDz = drizzle(subDbPool);
