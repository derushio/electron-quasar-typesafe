import { Env } from '^/config/env';
import type { Config } from 'drizzle-kit';
import path from 'path';

export default {
  schema: path.relative(
    __dirname,
    path.join(
      __dirname,
      'src',
      'main',
      'infrastructures',
      'db',
      'subDb',
      'schema',
      'index.ts',
    ),
  ),
  out: path.relative(
    __dirname,
    path.join(
      __dirname,
      'src',
      'main',
      'infrastructures',
      'db',
      'subDb',
      'migrations',
    ),
  ),
  driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    host: Env.VITE_DATABASE_SUB_HOST,
    port: Env.VITE_DATABASE_SUB_PORT,
    user: Env.VITE_DATABASE_SUB_USER,
    password: Env.VITE_DATABASE_SUB_PASSWORD,
    database: Env.VITE_DATABASE_SUB_NAME,
  },
} satisfies Config;
