import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserDto } from '@libs/contracts/users/user.dto';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('users.findById')
  findById(@Body() dto: UserDto): UserDto {
    return this.usersService.findById(dto);
  }
}
