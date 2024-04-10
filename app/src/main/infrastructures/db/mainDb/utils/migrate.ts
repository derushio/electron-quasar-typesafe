import { mainDbCon } from '#/infrastructures/db/mainDb/db';
import { mainDbMigrate } from '#/infrastructures/db/mainDb/utils/migration';

void mainDbMigrate().then(() => {
  // Don't forget to close the connection, otherwise the script will hang
  mainDbCon.close();
});
