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
      'mainDb',
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
      'mainDb',
      'migrations',
    ),
  ),
  driver: 'better-sqlite', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    url: path.join(
      __dirname,
      Env.VITE_DATABASE_MAIN_URL.replace('./', '') ?? '',
    ),
  },
} satisfies Config;
