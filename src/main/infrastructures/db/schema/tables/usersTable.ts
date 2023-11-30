import {
  idColumns,
  timestampColumns,
  timestampIdxes,
} from '#/infrastructures/db/schema/utils';
import { index, sqliteTable, text } from 'drizzle-orm/sqlite-core';

/**
 * ユーザーテーブル
 */
export const usersTable = sqliteTable(
  'users',
  {
    ...idColumns(),
    name: text('name').unique(),
    ...timestampColumns(),
  },
  (users) => ({
    nameIdx: index('name_idx').on(users.name),
    ...timestampIdxes(users),
  }),
);
