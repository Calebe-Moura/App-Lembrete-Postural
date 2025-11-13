import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entity/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ){};
  

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const passwordHashed = await hash(createUserDto.password, 10);
    
    if (createUserDto.isFisioterapeuta && !createUserDto.crefito){
            throw new BadRequestException('Fisioterapeuta deve ter um CREFITO');
    }


    return this.userRepository.save({
      ...createUserDto,
      password: passwordHashed,
    });
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async getOneUser({id:id}): Promise<UserEntity[]> {
    return this.userRepository.find(id);
  }
}
