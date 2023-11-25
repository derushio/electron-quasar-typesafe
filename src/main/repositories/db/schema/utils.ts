import { BuildColumns, sql } from 'drizzle-orm';
import {
  SQLiteColumnBuilderBase,
  SQLiteTableExtraConfig,
  index,
  text,
} from 'drizzle-orm/sqlite-core';

export function sqliteUuid() {
  return sql`PRINTF('%s-%s-%s-%s-%s', LOWER(HEX(RANDOMBLOB(4)))`;
}

export function sqliteNow() {
  return sql`DATETIME('now', 'localtime')`;
}

export function idColumns(): Record<string, SQLiteColumnBuilderBase> {
  return {
    id: text('id').primaryKey().notNull().default(sqliteUuid()),
  };
}

export function timestampColumns() {
  return {
    createdAt: text('created_at').notNull().default(sqliteNow()),
    updateAt: text('created_at').notNull().default(sqliteNow()),
  } satisfies Record<string, SQLiteColumnBuilderBase>;
}

export function timestampIdxes<
  TTableName extends string,
  TColumnsMap extends
    | Record<string, SQLiteColumnBuilderBase>
    | ReturnType<typeof timestampColumns>,
>(table: BuildColumns<TTableName, TColumnsMap, 'sqlite'>) {
  return {
    createdAtIdx: index('created_at_idx').on(table.createdAt),
    updatedAtIdx: index('updated_at_idx').on(table.updateAt),
  } satisfies SQLiteTableExtraConfig;
}

export function selectCount() {
  return {
    count: sql<number>`cast(count(*) as UNSIGNED)`,
  };
}
