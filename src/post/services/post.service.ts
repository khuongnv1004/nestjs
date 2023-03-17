/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AddTagDto, CreatePostDto, UpdatePostDto } from '../dto/post.dto';
import { PostRepository } from '../repositories/post.repository';
import { TagRepository } from '../repositories/tag.repository';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly tagRepository: TagRepository,
  ) {}

  async getAllPosts() {
    return this.postRepository.getByCondition({});
  }

  async getPostById(post_id: string) {
    const post = this.postRepository.findById(post_id);
    if (post) {
      return post;
    }
    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }

  async replacePost(post_id: string, data: UpdatePostDto) {
    return await this.postRepository.findByIdAndUpdate(post_id, data);
  }

  async createPost(post: CreatePostDto) {
    return await this.postRepository.create(post);
  }

  async deletePost(post_id: string) {
    return await this.postRepository.deleteOne(post_id);
  }

  async getAllTag() {
    return await this.tagRepository.getByCondition({});
  }

  async createTag(tag: AddTagDto) {
    return await this.tagRepository.create(tag);
  }
}
