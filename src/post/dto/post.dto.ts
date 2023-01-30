/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  content: string;
  post_date: string;
  tag: [];
  image: [];
  status: string
  comments: [];
  @IsNotEmpty()
  author: string
}

export class UpdatePostDto {
  title: string;
  description: string;
  content: string;
  post_date: string;
  tag: [];
  image: [];
  status: string
  comments: [];
  author: string
}

export class AddTagDto {
  @IsNotEmpty()
  tag_name: string
}
