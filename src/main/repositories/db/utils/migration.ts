import { dz } from '#/repositories/db';
import path from 'path';
import { migrate as migrateSQLite3 } from 'drizzle-orm/better-sqlite3/migrator';
import { Env } from '^/config/env';
import { app } from 'electron';

const paths = ['src', 'main', 'repositories', 'db', 'migrations'];

export async function migrate() {
  const migrationsPath = Env.VITE_BUILDED
    ? path.join(app?.getAppPath(), ...paths)
    : path.join('.', ...paths);

  // This will run migrations on the database, skipping the ones already applied
  migrateSQLite3(dz, {
    migrationsFolder: migrationsPath,
  });
}
