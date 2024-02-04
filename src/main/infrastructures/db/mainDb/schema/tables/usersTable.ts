import {
  sqliteIdColumns,
  sqliteTimestampColumns,
  sqliteTimestampIdxes,
} from '#/utils/sqlite';
import { index, sqliteTable, text } from 'drizzle-orm/sqlite-core';

const tableName = 'users';

/**
 * ユーザーテーブル
 */
export const usersTable = sqliteTable(
  tableName,
  {
    ...sqliteIdColumns(),
    name: text('name').unique().notNull(),
    ...sqliteTimestampColumns(),
  },
  (table) => ({
    nameIdx: index(`${tableName}___name_idx`).on(table.name),
    ...sqliteTimestampIdxes(tableName, table),
  }),
);
