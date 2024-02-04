import { BuildColumns, sql } from 'drizzle-orm';
import {
  SQLiteColumn,
  SQLiteColumnBuilderBase,
  SQLiteTableExtraConfig,
  index,
  text,
  uniqueIndex,
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
    updatedAt: text('updated_at').notNull().default(sqliteNow()),
  } satisfies Record<string, SQLiteColumnBuilderBase>;
}

export function sqliteTimestampIdxes<
  TTableName extends string,
  TColumnsMap extends
    | Record<string, SQLiteColumnBuilderBase>
    | ReturnType<typeof sqliteTimestampColumns>,
>(tableName: string, table: BuildColumns<TTableName, TColumnsMap, 'sqlite'>) {
  return {
    createdAtIdx: sqliteGenerateIndex(tableName, table.createdAt),
    updatedAtIdx: sqliteGenerateIndex(tableName, table.updatedAt),
  } satisfies SQLiteTableExtraConfig;
}

export function sqliteGenerateIndex<T extends SQLiteColumn>(
  tableName: string,
  column: T,
) {
  return index(`${tableName}___${column.name}_idx`).on(column);
}

export function sqliteGenerateUniqueIndex<T extends SQLiteColumn>(
  tableName: string,
  ...columns: [T, ...T[]]
) {
  return uniqueIndex(
    `${tableName}___unique_${columns.map((v) => v.name).join('_')}`,
  ).on(...columns);
}

export function sqliteSelectCount() {
  return {
    count: sql<number>`CAST(COUNT(*) as UNSIGNED)`,
  };
}
