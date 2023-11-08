import { pc } from '#/repositories/prisma';
import { seed } from '%/seed/seed';

seed()
  .then(async () => {
    await pc.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await pc.$disconnect();
    process.exit(1);
  });
