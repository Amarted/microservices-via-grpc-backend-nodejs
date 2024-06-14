import { User } from '../types/User';

export abstract class UserRepository {
  public abstract createUser(name: string, password: string): Promise<User | Error> | (User | Error);
}