import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AddTagDto, CreatePostDto, UpdatePostDto } from '../dto/post.dto';
import { PostService } from '../services/post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getAllPost() {
    return this.postService.getAllPosts();
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postService.getPostById(id);
  }

  @Post()
  async createPost(@Body() post: CreatePostDto) {
    return this.postService.createPost(post);
  }

  @Put(':id')
  async replacePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return this.postService.replacePost(id, post);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    await this.postService.deletePost(id);
    return true;
  }
}

@Controller('tag')
export class TagController {
  constructor(private readonly postService: PostService) {}
  @Get('get-tags')
  async getAllTag() {
    return this.postService.getAllTag();
  }

  @Post('add-new-tag')
  async createTag(@Body() tag: AddTagDto) {
    return this.postService.createTag(tag);
  }
}
