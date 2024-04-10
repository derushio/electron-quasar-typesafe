import { subDbDz } from '#/infrastructures/db/subDb';
import { usersTable } from '#/infrastructures/db/subDb/schema';
import { sha512 } from '#/utils/hash';
import { separate } from '#/utils/separator';

export const testUser = {
  id: '3d84b1f8-bb5a-4867-8fde-e46e3e6ac854',
  email: 'test@example.com',
  passwordHash: sha512('password'),
} as const;

export const defaultUsers = [testUser] as const;

export default async function seedUsers() {
  separate();
  console.info('seedUsers');

  for (const user of defaultUsers) {
    await subDbDz.insert(usersTable).values(testUser).onConflictDoUpdate({
      target: usersTable.id,
      set: testUser,
    });

    console.info('seedUser:', user.email);
  }
}
