import { Env } from '^/config/env';
import { Pool } from 'pg';

export const subDbPool = new Pool({
  host: Env.VITE_DATABASE_MAIN_HOST,
  port: Env.VITE_DATABASE_MAIN_PORT,
  user: Env.VITE_DATABASE_MAIN_USER,
  password: Env.VITE_DATABASE_MAIN_PASSWORD,
  database: Env.VITE_DATABASE_MAIN_NAME,
});
