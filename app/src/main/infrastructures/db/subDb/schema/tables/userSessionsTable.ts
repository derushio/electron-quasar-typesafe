import { usersTable } from '#/infrastructures/db/subDb/schema/tables/usersTable';
import { pgTimestampColumns, pgTimestampIdxes } from '#/utils/pg';
import { index, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

const tableName = 'user_sessions';

/**
 * スタッフセッションテーブル
 */
export const userSessionsTable = pgTable(
  tableName,
  {
    id: uuid('id').primaryKey().notNull().defaultRandom(),
    userId: uuid('user_id')
      .notNull()
      .references(() => usersTable.id, {
        onUpdate: 'cascade',
        onDelete: 'cascade',
      }),

    accessTokenHash: text('access_token_hash').notNull(),
    accessTokenExpireAt: timestamp('access_token_expire_at').notNull(),

    resetTokenHash: text('reset_token_hash').notNull(),
    resetTokenExpireAt: timestamp('reset_token_expire_at').notNull(),

    ...pgTimestampColumns(),
  },
  (table) => ({
    accessTokenHash: index().on(table.accessTokenHash),
    accessTokenExpireAt: index().on(table.accessTokenExpireAt),
    resetTokenHash: index().on(table.resetTokenHash),
    resetTokenExpireAt: index().on(table.resetTokenExpireAt),

    ...pgTimestampIdxes(tableName, table),
  }),
);
