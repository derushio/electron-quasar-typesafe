import seedUsers from '#/infrastructures/db/mainDb/seed/data/seedUsers';

/**
 * upsertでseedする
 */
export async function mainDbSeed() {
  await seedUsers();
}
