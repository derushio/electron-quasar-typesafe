import { subDbPool } from '#/infrastructures/db/subDb/db';
import { subDbMigrate } from '#/infrastructures/db/subDb/utils/migration';

void subDbMigrate().then(async () => {
  // Don't forget to close the connection, otherwise the script will hang
  await subDbPool.end();
});
