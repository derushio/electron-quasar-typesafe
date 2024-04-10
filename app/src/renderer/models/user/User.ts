import { usersTable } from '#/infrastructures/db/subDb/schema';
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
  public static async query(args: unknown): Promise<EntityListResult<User>> {
    args;
    throw new Error('Method not implemented.');
  }

  public async save(): Promise<EntityResult<this>> {
    throw new Error('Method not implemented.');
  }
  public async delete(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
