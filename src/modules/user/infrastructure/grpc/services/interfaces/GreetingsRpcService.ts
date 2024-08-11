import { Observable } from 'rxjs';

/** Interface representing the remote service as described in UserGreetingsRpcService.ptodo file */
export interface GreetingsRpcService {
  greet(request: UserGreetingsRequest): Observable<UserGreetingsResponse>;
}

interface UserGreetingsRequest {
  username: string;
}

interface UserGreetingsResponse {
  // The message with user greetings
  greetings: string;
}
