import { usersTable } from '#/infrastructures/db/mainDb/schema/index';
import {
  Entity,
  EntityListResult,
  EntityNullableResult,
  EntityResult,
} from '$/models/Entity';
import { Mutable } from '^/utils/mutable';

/**
 * エンティティクラスの例
 */
export class User extends Entity {
  public constructor(public value: Mutable<typeof usersTable.$inferInsert>) {
    super();
  }

  public static async getById(id: string): Promise<EntityNullableResult<User>> {
    id;
    throw new Error('Method not implemented.');
  }
  public static async query<T>(args: T): Promise<EntityListResult<User>> {
    args;
    throw new Error('Method not implemented.');
  }

  public save(): Promise<EntityResult<this>> {
    throw new Error('Method not implemented.');
  }
  public delete(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
