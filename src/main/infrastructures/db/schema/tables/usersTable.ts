import {
  idColumns,
  timestampColumns,
  timestampIdxes,
} from '#/infrastructures/db/schema/utils';
import { index, sqliteTable, text } from 'drizzle-orm/sqlite-core';

const tableName = 'users';

/**
 * ユーザーテーブル
 */
export const usersTable = sqliteTable(
  tableName,
  {
    ...idColumns(),
    name: text('name').unique(),
    ...timestampColumns(),
  },
  (table) => ({
    nameIdx: index(`${tableName}___name_idx`).on(table.name),
    ...timestampIdxes(tableName, table),
  }),
);
