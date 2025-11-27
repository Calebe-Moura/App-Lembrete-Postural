import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interface/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
   
    const passwordHashed = await hash(createUserDto.password,10)

    return ({
      ...createUserDto,
      password:passwordHashed
    })
  }

  findAllUsers() {
    return `This action returns all user`;
  }

  findOneUser(id: number) {
    return `This action returns a #${id} user`;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  removeUser(id: number) {
    return `This action removes a #${id} user`;
  }
}
