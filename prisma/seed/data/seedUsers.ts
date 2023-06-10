import { pc } from '#/repositories/prisma';
import { separate } from '%/seed/separator';

export const testUser = {
  name: 'test',
} as const;

export const defaultUsers = [testUser] as const;

export default async function seedUsers() {
  separate();
  console.info('seedUsers');

  for (const user of defaultUsers) {
    await pc.user.upsert({
      where: {
        name: user.name,
      },
      create: {
        name: user.name,
      },
      update: {
        name: user.name,
      },
    });
    console.info('seedUser:', user.name);
  }
}
