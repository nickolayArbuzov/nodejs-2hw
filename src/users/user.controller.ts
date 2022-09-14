import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import { CreateUserDto } from './dto/create-user.dto';


@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}

    @Post()
    create(@Body() userDto: CreateUserDto) {
        
    }

    @Get()
    getAll() {
        return 'users'
    }

}