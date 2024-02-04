import { pgIdColumns, pgTimestampColumns, pgTimestampIdxes } from '#/utils/pg';
import { index, pgTable, text } from 'drizzle-orm/pg-core';

const tableName = 'posts';

/**
 * 投稿テーブル
 */
export const postsTable = pgTable(
  tableName,
  {
    ...pgIdColumns(),
    name: text('name').unique().notNull(),
    ...pgTimestampColumns(),
  },
  (table) => ({
    nameIdx: index().on(table.name),
    ...pgTimestampIdxes(tableName, table),
  }),
);
