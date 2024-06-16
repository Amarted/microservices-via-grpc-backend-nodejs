import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../application/interfaces/UseCase';
import { UserRegistrationRequest } from './UserRegistrationRequest';
import { RegistrationService } from '../../../domain/services/registration/RegistrationService';
import { EnsureRequestContext } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';
import { UserRegistrationResponse } from './UserRegistrationResponse';

@Injectable()
export class UserRegistrationUseCase implements UseCase<UserRegistrationRequest, UserRegistrationResponse | Error> {
  public constructor(
    private registrationService: RegistrationService,
    private entityManager: EntityManager,
  ) { }

  @EnsureRequestContext()
  public async execute({
    username, password,
  }: UserRegistrationRequest): Promise<UserRegistrationResponse | Error> {
    const registrationResult = await this.registrationService.registration(username, password);

    await this.entityManager.flush();

    return registrationResult;
  }
}
