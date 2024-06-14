import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../interfaces/UserRepository';
import bcrypt from 'bcrypt';

@Injectable()
export class RegistrationService {
  private saltRounds = 10;

  public constructor(
    private userRepository: UserRepository
  ) { }

  public async registration(username: string, password: string): Promise<true | Error> {

    if (await this.isUserWithUsernameExists(username)) {
      return new Error(`User with username '${username}' already exists.`);
    }

    const hashedPassword = this.hashPassword(password);
    const userCreationResult = await this.userRepository.createUser(username, hashedPassword);

    if (userCreationResult instanceof Error) {
      const error = userCreationResult;
      return error;
    }

    return true;
  }

  private async isUserWithUsernameExists(username: string): Promise<boolean> {
    return await this.userRepository.findUserByUsername(username) !== null;
  }

  private hashPassword(password: string): string {
    const salt = bcrypt.genSaltSync(this.saltRounds);
    const hash = bcrypt.hashSync(password, salt)

    return hash
  }
}
