import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController, TagController } from './controllers/post.controller';
import { PostSchema } from './models/post.model';
import { TagSchema } from './models/tag.model';
import { PostRepository } from './repositories/post.repository';
import { TagRepository } from './repositories/tag.repository';
import { PostService } from './services/post.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Post',
        schema: PostSchema,
      },
      {
        name: 'Tag',
        schema: TagSchema,
      }
    ]),
  ],
  controllers: [PostController, TagController],
  providers: [PostService, PostRepository, TagRepository],
})
export class PostModule {}
