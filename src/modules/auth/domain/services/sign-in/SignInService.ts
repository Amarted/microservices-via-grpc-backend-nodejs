import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../types/UserRepository';
import bcrypt from 'bcrypt';
import { AccessService } from '../../../application/services/AccessService';

interface SignInResult {
  accessToken: string;
}

@Injectable()
export class SignInService {

  public constructor(
    private userRepository: UserRepository,
    private accessService: AccessService,
  ) { }

  public async signIn(username: string, password: string): Promise<SignInResult | Error> {
    const user = await this.userRepository.findUserByUsername(username);
    if (!user) {
      return new Error('User does not exists.');
    }

    if (!this.verifyUserPassword(password, user.password)) {
      return new Error('Wrong password.');
    }

    const accessToken: string = this.accessService.createToken(user.id);

    return { accessToken };

  }

  private verifyUserPassword(givenPassword: string, userHashedPassword: string): boolean {
    return bcrypt.compareSync(givenPassword, userHashedPassword);
  }
}
