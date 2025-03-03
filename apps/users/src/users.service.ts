import { Injectable } from '@nestjs/common';
import { UserDto } from '@libs/contracts/users/user.dto';

@Injectable()
export class UsersService {
  findById(dto: UserDto): UserDto {
    return dto;
  }
}
