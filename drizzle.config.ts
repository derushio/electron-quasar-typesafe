import 'dotenv/config';
import type { Config } from 'drizzle-kit';
import path from 'path';

export default {
  schema: path.join(
    __dirname,
    'src',
    'main',
    'repositories',
    'db',
    'schema',
    'index.ts',
  ),
  out: path.join(__dirname, 'src', 'main', 'repositories', 'db', 'migrations'),
  driver: 'better-sqlite', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    url: path.join(
      __dirname,
      process.env.VITE_DATABASE_URL?.replace('./', '') ?? '',
    ),
  },
} satisfies Config;
