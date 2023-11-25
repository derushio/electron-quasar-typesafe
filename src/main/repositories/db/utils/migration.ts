import { dz } from '#/repositories/db';
import path from 'path';
import { migrate as migrateSQLite3 } from 'drizzle-orm/better-sqlite3/migrator';

export function migrate() {
  // This will run migrations on the database, skipping the ones already applied
  migrateSQLite3(dz, {
    migrationsFolder: path.join(
      '.',
      'src',
      'main',
      'repositories',
      'db',
      'migrations',
    ),
  });
}
