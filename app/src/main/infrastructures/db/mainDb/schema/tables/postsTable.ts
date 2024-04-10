import {
  sqliteGenerateIndex,
  sqliteIdColumns,
  sqliteTimestampColumns,
  sqliteTimestampIdxes,
} from '#/utils/sqlite';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

const tableName = 'posts';

/**
 * 投稿テーブル
 */
export const postsTable = sqliteTable(
  tableName,
  {
    ...sqliteIdColumns(),

    title: text('title').unique().notNull(),
    body: text('name').notNull(),

    ...sqliteTimestampColumns(),
  },
  (table) => ({
    title: sqliteGenerateIndex(tableName, table.title),

    ...sqliteTimestampIdxes(tableName, table),
  }),
);
