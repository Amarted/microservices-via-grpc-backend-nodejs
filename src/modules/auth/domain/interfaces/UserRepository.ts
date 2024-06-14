import { User } from '../types/User';

export abstract class UserRepository {
  public abstract createUser(username: string, password: string): Promise<User | Error> | (User | Error);
  public abstract findUserByUsername(username: string): Promise<User | null> | (User | null);
}