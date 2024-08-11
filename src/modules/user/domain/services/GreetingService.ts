export abstract class GreetingService {
  // Create greetings message for an user with the specified name
  public abstract greet(username: string): Promise<string>;
}
