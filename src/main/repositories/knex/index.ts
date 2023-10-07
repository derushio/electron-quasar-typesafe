import { Env } from '$/config/env';
import { knex } from 'knex';

/**
 * 複雑なクエリはkcを用いる
 */
export const kc = knex({
  client: 'better-sqlite3',
  connection: {
    filename: Env.VITE_DATABASE_URL,
    // host: Env.VITE_DATABASE_HOST,
    // database: Env.VITE_DATABASE_NAME,
    // user: Env.VITE_DATABASE_USER,
    // password: Env.VITE_DATABASE_PASSWORD,
    // port: Env.VITE_DATABASE_PORT,
  },
});
