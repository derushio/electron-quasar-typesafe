import {
  sqliteGenerateIndex,
  sqliteIdColumns,
  sqliteTimestampColumns,
  sqliteTimestampIdxes,
} from '#/utils/sqlite';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

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
    name: sqliteGenerateIndex(tableName, table.name),
    ...sqliteTimestampIdxes(tableName, table),
  }),
);
