import { pgIdColumns, pgTimestampColumns, pgTimestampIdxes } from '#/utils/pg';
import { index, pgTable, text } from 'drizzle-orm/pg-core';

const tableName = 'users';

/**
 * ユーザーテーブル
 */
export const usersTable = pgTable(
  tableName,
  {
    ...pgIdColumns(),

    email: text('email').unique().notNull(),
    /** sha512 */
    passwordHash: text('password_hash').notNull(),

    ...pgTimestampColumns(),
  },
  (table) => ({
    email: index().on(table.email),
    passwordHash: index().on(table.passwordHash),

    ...pgTimestampIdxes(tableName, table),
  }),
);
export type UserOptionalPasswordHash = Omit<
  typeof usersTable.$inferInsert,
  'passwordHash'
> & {
  passwordHash?: string;
};
