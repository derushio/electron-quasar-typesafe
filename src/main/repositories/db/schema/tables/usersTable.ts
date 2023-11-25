import {
  idColumns,
  timestampColumns,
  timestampIdxes,
} from '#/repositories/db/schema/utils';
import { index, sqliteTable, text } from 'drizzle-orm/sqlite-core';

/**
 * ユーザーテーブル
 */
export const usersTable = sqliteTable(
  'users',
  {
    ...idColumns(),
    name: text('name'),
    ...timestampColumns(),
  },
  (users) => ({
    nameIdx: index('name_idx').on(users.name),
    ...timestampIdxes(users),
  }),
);