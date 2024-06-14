import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 as generateUuid, validate as validateUuid } from 'uuid';

@Entity({ tableName: 'user' })
export class UserDatabaseEntity {
  @PrimaryKey({ columnType: 'uuid' })
  public readonly id: string;

  @Property({ unique: true })
  public readonly username: string;

  @Property()
  public readonly password: string;

  @Property()
  public readonly createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  public readonly updatedAt = new Date();

  private constructor(id: string, username: string, password: string) {
    this.id = id;
    this.username = username;
    this.password = password;
  }

  public static create(username: string, password: string, uuid?: string): UserDatabaseEntity | Error {
    let entityId: string;
    if (uuid) {
      if (validateUuid(uuid)) {
        entityId = uuid;
      } else {
        return new Error('User ID must be a valid UUID.');
      }
    } else {
      entityId = generateUuid();
    }

    return new UserDatabaseEntity(entityId, username, password);
  }
}