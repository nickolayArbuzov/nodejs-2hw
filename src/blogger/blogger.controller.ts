import {Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, ParseUUIDPipe, Post, Put, UseGuards} from '@nestjs/common';
import { CreatePostDto } from '../posts/dto/post.dto';
import { PostService } from '../posts/post.service';
import { AuthGuard } from '../guards/auth.guard';
import {BloggerService} from "./blogger.service";
import { CreateBloggerDto, UpdateBloggerDto } from './dto/blogger.dto';


@Controller('bloggers')
export class BloggerController {

    constructor(
        private bloggerService: BloggerService,
        //private postService: PostService
    ) {}
    @Get()
    getAll() {
        return this.bloggerService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.bloggerService.findOne(id)
    }

    /*@Get(':id/posts') 
    getPostByBlogId(@Param('id') id: string) {
        return this.postService.findAllByBlogId(id)
    }*/

    @UseGuards(AuthGuard)
    @Post()
    create(@Body() bloggerDto: CreateBloggerDto) {
        return this.bloggerService.createBlogger(bloggerDto);
    }

    @Post(':id/posts') 
    creatPostForBlogId(@Param('id') id: string, @Body() postDto: CreatePostDto) {
        return id
    }

    @UseGuards(AuthGuard)
    @HttpCode(204)
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.bloggerService.deleteBlogger(id)
    }

    @UseGuards(AuthGuard)
    @HttpCode(204)
    @Put(':id')
    update(@Param('id') id: string, @Body() bloggerDto: UpdateBloggerDto){
        return this.bloggerService.updateBlogger(id, bloggerDto)
    }

}