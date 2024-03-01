import seedPosts from '#/infrastructures/db/subDb/seed/data/seedUsers';

/**
 * upsertでseedする
 */
export async function subDbSeed() {
  await seedPosts();
}
