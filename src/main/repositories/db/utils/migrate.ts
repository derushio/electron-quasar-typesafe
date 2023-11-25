import { sl3con } from '#/repositories/db/db';
import { migrate } from '#/repositories/db/utils/migration';

void migrate().then(() => {
  // Don't forget to close the connection, otherwise the script will hang
  sl3con.close();
});
