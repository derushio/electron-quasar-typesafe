import { mainDbDz } from '#/infrastructures/db/mainDb';
import { postsTable } from '#/infrastructures/db/mainDb/schema';
import { separate } from '#/utils/separator';

export const testPost = {
  id: '84b4b648-820f-4172-b154-1c3c5b0194e1',
  title: 'test',
  body: '',
} as const;

export const defaultPosts = [testPost] as const;

export default async function seedPosts() {
  separate();
  console.info('seedPosts');

  for (const post of defaultPosts) {
    await mainDbDz.insert(postsTable).values(post).onConflictDoUpdate({
      target: postsTable.id,
      set: post,
    });

    console.info('seedPost:', post.title);
  }
}
