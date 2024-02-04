import { BuildColumns, sql } from 'drizzle-orm';
import {
  PgColumnBuilderBase,
  PgTableExtraConfig,
  index,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

export function pgIdColumns() {
  return {
    id: uuid('id').primaryKey().notNull().defaultRandom(),
  } satisfies Record<string, PgColumnBuilderBase>;
}

export function pgTimestampColumns() {
  return {
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updateAt: timestamp('updated_at').notNull().defaultNow(),
  } satisfies Record<string, PgColumnBuilderBase>;
}

export function pgTimestampIdxes<
  TTableName extends string,
  TColumnsMap extends
    | Record<string, PgColumnBuilderBase>
    | ReturnType<typeof pgTimestampColumns>,
>(tableName: string, table: BuildColumns<TTableName, TColumnsMap, 'pg'>) {
  tableName;
  return {
    createdAtIdx: index().on(table.createdAt),
    updatedAtIdx: index().on(table.updateAt),
  } satisfies PgTableExtraConfig;
}

export function pgSelectCount() {
  return {
    count: sql<number>`COUNT(*)::INTEGER`,
  };
}
