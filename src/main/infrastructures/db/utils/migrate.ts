import { sl3con } from '#/infrastructures/db/db';
import { migrate } from '#/infrastructures/db/utils/migration';

void migrate().then(() => {
  // Don't forget to close the connection, otherwise the script will hang
  sl3con.close();
});
