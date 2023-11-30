import seedUsers from '#/infrastructures/db/seed/data/seedUsers';

/**
 * upsertでseedする
 */
export async function seed() {
  await seedUsers();
}
