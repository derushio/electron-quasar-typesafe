import { mainDbDz } from '#/infrastructures/db/mainDb';
import { usersTable } from '#/infrastructures/db/mainDb/schema';
import { separate } from '#/utils/separator';

export const testUser = {
  id: '84b4b648-820f-4172-b154-1c3c5b0194e1',
  name: 'test',
} as const;

export const defaultUsers = [testUser] as const;

export default async function seedUsers() {
  separate();
  console.info('seedUsers');

  for (const user of defaultUsers) {
    await mainDbDz
      .insert(usersTable)
      .values({
        id: user.id,
        name: user.name,
      })
      .onConflictDoUpdate({
        target: usersTable.id,
        set: {
          id: user.id,
          name: user.name,
        },
      });

    console.info('seedUser:', user.name);
  }
}
