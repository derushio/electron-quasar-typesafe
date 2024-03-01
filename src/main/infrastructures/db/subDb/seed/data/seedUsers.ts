import { subDbDz } from '#/infrastructures/db/subDb';
import { postsTable } from '#/infrastructures/db/subDb/schema';
import { separate } from '#/utils/separator';

export const testPost = {
  id: '3d84b1f8-bb5a-4867-8fde-e46e3e6ac854',
  name: 'test',
} as const;

export const defaultPosts = [testPost] as const;

export default async function seedPosts() {
  separate();
  console.info('seedPosts');

  for (const post of defaultPosts) {
    await subDbDz
      .insert(postsTable)
      .values({
        id: post.id,
        name: post.name,
      })
      .onConflictDoUpdate({
        target: postsTable.id,
        set: {
          id: post.id,
          name: post.name,
        },
      });

    console.info('seedPost:', post.name);
  }
}
