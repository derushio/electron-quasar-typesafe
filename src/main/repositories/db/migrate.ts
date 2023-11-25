import { dz } from '#/repositories/db';
import { sl3con } from '#/repositories/db/db';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import path from 'path';

// This will run migrations on the database, skipping the ones already applied
migrate(dz, {
  migrationsFolder: path.join(
    '.',
    'src',
    'main',
    'repositories',
    'db',
    'migrations',
  ),
});

// Don't forget to close the connection, otherwise the script will hang
sl3con.close();
