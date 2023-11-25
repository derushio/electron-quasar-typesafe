import { dz } from '#/repositories/db';
import { migrate } from 'drizzle-orm/mysql2/migrator';

// This will run migrations on the database, skipping the ones already applied
await migrate(dz, { migrationsFolder: './drizzle' });

// Don't forget to close the connection, otherwise the script will hang
await connection.end();
