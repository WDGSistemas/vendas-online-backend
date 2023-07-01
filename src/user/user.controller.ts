import { Body, Controller, Get, Post } from '@nestjs/common';
import { json } from 'stream/consumers';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
    @Get()
    async gerAllUser(): Promise<User[]>{
      return this.userService.getAllUser();  
    }
    constructor(private readonly userService: UserService) {};
    @Post()
    async createUser(
        @Body() createUser: CreateUserDto) : Promise<User> { 
        return this.userService.createUser(createUser);
      }
}

