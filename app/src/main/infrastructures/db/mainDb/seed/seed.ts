import seedPosts from '#/infrastructures/db/mainDb/seed/data/seedPosts';

/**
 * upsertでseedする
 */
export async function mainDbSeed() {
  await seedPosts();
}
