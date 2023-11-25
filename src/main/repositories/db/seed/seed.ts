import seedUsers from '#/repositories/db/seed/data/seedUsers';

/**
 * upsertでseedする
 */
export async function seed() {
  await seedUsers();
}
