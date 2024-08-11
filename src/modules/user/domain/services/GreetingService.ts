import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  // Create greetings message for an user with the specified name
  public greet(username: string): string {
    return `Hello, ${username}!`;
  }
}
