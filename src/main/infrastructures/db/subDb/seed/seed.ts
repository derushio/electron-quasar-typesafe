import seedUsers from '#/infrastructures/db/mainDb/seed/data/seedUsers';

/**
 * upsertでseedする
 */
export async function subDbSeed() {
  await seedUsers();
}
