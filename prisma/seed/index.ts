import { pc } from '#/repositories/prisma';
import seedUsers from '%/seed/data/seedUsers';

/**
 * upsertでseedする
 */
async function main() {
  await seedUsers();
}

main()
  .then(async () => {
    await pc.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await pc.$disconnect();
    process.exit(1);
  });
