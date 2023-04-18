import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

  constructor(private userService: UsersService) {}

  async validateUser(username: string, pw: string): Promise<any> {
    const user = await this.userService.findUser(username);

    if (user && user.password === pw) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
