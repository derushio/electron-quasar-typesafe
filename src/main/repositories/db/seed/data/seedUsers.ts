import { dz } from '#/repositories/db';
import { usersTable } from '#/repositories/db/schema';
import { separate } from '#/repositories/db/seed/separator';

export const testUser = {
  name: 'test',
} as const;

export const defaultUsers = [testUser] as const;

export default async function seedUsers() {
  separate();
  console.info('seedUsers');

  for (const user of defaultUsers) {
    await dz
      .insert(usersTable)
      .values({
        name: user.name,
      })
      .onConflictDoUpdate({
        target: usersTable.name,
        set: {
          name: user.name,
        },
      });

    console.info('seedUser:', user.name);
  }
}
