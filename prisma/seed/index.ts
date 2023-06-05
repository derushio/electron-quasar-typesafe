import { pc } from '#/repositories/prisma';

/**
 * upsertされる想定で作る
 */
async function main() {
  // TODO:
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
