/**
 * ModelのEntityのベースクラス
 */
export abstract class Entity {
  /** public static系のメソッドはOverrideできないためコメントアウトして置いておく */
  // public static async getById(id: string): Promise<EntityNullableResult<Entity>> {
  //   id;
  //   throw new Error('Method not implemented.');
  // }
  // public static async query(args: unknown): Promise<EntityListResult<Entity>> {
  //   args;
  //   throw new Error('Method not implemented.');
  // }

  public abstract save(): Promise<EntityResult<this>>;
  public abstract delete(): Promise<void>;
}

export interface EntityResult<T> {
  item: T;
}

export interface EntityNullableResult<T> {
  item: T | undefined;
}

export interface EntityListResult<T> {
  items: T[];
  allCount: number;
}
