import { dz } from '#/infrastructures/db';
import { Env } from '^/config/env';
import { migrate as migrateSQLite3 } from 'drizzle-orm/better-sqlite3/migrator';
import { app } from 'electron';
import path from 'path';

const paths = ['src', 'main', 'infrastructures', 'db', 'migrations'];

export async function migrate() {
  const migrationsPath = Env.VITE_BUILDED
    ? path.join(app?.getAppPath(), ...paths)
    : path.join('.', ...paths);

  // This will run migrations on the database, skipping the ones already applied
  migrateSQLite3(dz, {
    migrationsFolder: migrationsPath,
  });
}
