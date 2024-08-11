import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repository/UserRepository';
import bcrypt from 'bcrypt';
import { AccessService } from '../../../application/services/AccessService';

interface RegistrationResult {
  accessToken: string;
}

@Injectable()
export class RegistrationService {
  private saltRounds = 10;

  public constructor(
    private userRepository: UserRepository,
    private accessService: AccessService,
  ) { }

  public async registration(username: string, password: string): Promise<RegistrationResult | Error> {

    if (await this.isUserWithUsernameExists(username)) {
      return new Error(`User with username '${username}' already exists.`);
    }

    const hashedPassword = this.hashPassword(password);
    const userCreationResult = await this.userRepository.createUser(username, hashedPassword);

    if (userCreationResult instanceof Error) {
      const error = userCreationResult;
      return error;
    }

    const user = userCreationResult;

    const accessToken: string = this.accessService.createToken(user.id);

    return { accessToken };
  }

  private async isUserWithUsernameExists(username: string): Promise<boolean> {
    return await this.userRepository.findUserByUsername(username) !== null;
  }

  private hashPassword(password: string): string {
    const salt = bcrypt.genSaltSync(this.saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
  }
}
