import { Env } from '^/config/env';
import { Pool } from 'pg';

export const subDbPool = new Pool({
  host: Env.VITE_DATABASE_SUB_HOST,
  port: Env.VITE_DATABASE_SUB_PORT,
  user: Env.VITE_DATABASE_SUB_USER,
  password: Env.VITE_DATABASE_SUB_PASSWORD,
  database: Env.VITE_DATABASE_SUB_NAME,
});
