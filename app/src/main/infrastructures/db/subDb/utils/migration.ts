import { subDbDz } from '#/infrastructures/db/subDb';
import { migrate as migratePostgres } from 'drizzle-orm/node-postgres/migrator';
import path from 'path';

const paths = ['src', 'main', 'infrastructures', 'db', 'subDb', 'migrations'];

export async function subDbMigrate() {
  const migrationsPath = path.join('.', ...paths);

  // This will run migrations on the database, skipping the ones already applied
  await migratePostgres(subDbDz, {
    migrationsFolder: migrationsPath,
  });
}
