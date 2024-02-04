import {
  sqliteGenerateIndex,
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
    nameIdx: index(sqliteGenerateIndex(tableName, table.name.name)).on(
      table.name,
    ),
    ...sqliteTimestampIdxes(tableName, table),
  }),
);
