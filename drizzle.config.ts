import { configDotenv } from 'dotenv';
import type { Config } from 'drizzle-kit';
import path from 'path';

configDotenv();

export default {
  schema: path.join(
    __dirname,
    'src',
    'main',
    'infrastructures',
    'db',
    'schema',
    'index.ts',
  ),
  out: path.join(
    __dirname,
    'src',
    'main',
    'infrastructures',
    'db',
    'migrations',
  ),
  driver: 'better-sqlite', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    url: path.join(
      __dirname,
      process.env.VITE_DATABASE_URL?.replace('./', '') ?? '',
    ),
  },
} satisfies Config;
