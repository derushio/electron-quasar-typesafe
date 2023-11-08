import seedUsers from '%/seed/data/seedUsers';

/**
 * upsertでseedする
 */
export async function seed() {
  await seedUsers();
}
