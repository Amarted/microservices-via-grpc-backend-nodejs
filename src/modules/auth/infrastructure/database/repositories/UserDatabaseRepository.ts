import { Injectable } from '@nestjs/common';
import { User } from '../../../domain/types/User';
import { UserRepository } from '../../../domain/interfaces/UserRepository';
import { UserDatabaseEntity } from '../entities/UserDatabaseEntity';
import { EntityManager } from '@mikro-orm/postgresql';

@Injectable()
export class UserDatabaseRepository extends UserRepository {
  public constructor(
    private entityManager: EntityManager,
  ) {
    super();
  }

  public override createUser(username: string, password: string): User | Error {
    const userCreationInDatabaseResult = UserDatabaseEntity.create(username, password);

    if (userCreationInDatabaseResult instanceof Error) {
      const error = userCreationInDatabaseResult;
      return error
    }

    this.entityManager.persist(userCreationInDatabaseResult);

    const user = userCreationInDatabaseResult;

    return user;
  }
}