import { BuildColumns, sql } from 'drizzle-orm';
import {
  SQLiteColumnBuilderBase,
  SQLiteTableExtraConfig,
  index,
  text,
} from 'drizzle-orm/sqlite-core';

export function sqliteUuid() {
  return sql`(
    PRINTF(
      '%s-%s-%s-%s-%s',
      LOWER(HEX(RANDOMBLOB(4))),
      LOWER(HEX(RANDOMBLOB(2))),
      LOWER(HEX(RANDOMBLOB(2))),
      LOWER(HEX(RANDOMBLOB(2))),
      LOWER(HEX(RANDOMBLOB(6)))
    )
  )`;
}

export function sqliteNow() {
  return sql`(DATETIME('now', 'localtime'))`;
}

export function sqliteIdColumns() {
  return {
    id: text('id').primaryKey().notNull().default(sqliteUuid()),
  } satisfies Record<string, SQLiteColumnBuilderBase>;
}

export function sqliteTimestampColumns() {
  return {
    createdAt: text('created_at').notNull().default(sqliteNow()),
    updateAt: text('updated_at').notNull().default(sqliteNow()),
  } satisfies Record<string, SQLiteColumnBuilderBase>;
}

export function sqliteTimestampIdxes<
  TTableName extends string,
  TColumnsMap extends
    | Record<string, SQLiteColumnBuilderBase>
    | ReturnType<typeof sqliteTimestampColumns>,
>(tableName: string, table: BuildColumns<TTableName, TColumnsMap, 'sqlite'>) {
  return {
    createdAtIdx: index(`${tableName}___created_at_idx`).on(table.createdAt),
    updatedAtIdx: index(`${tableName}___updated_at_idx`).on(table.updateAt),
  } satisfies SQLiteTableExtraConfig;
}

export function sqliteGenerateIndex(tableName: string, columnName: string) {
  return `${tableName}___${columnName}_idx`;
}

export function sqliteSelectCount() {
  return {
    count: sql<number>`CAST(COUNT(*) as UNSIGNED)`,
  };
}
