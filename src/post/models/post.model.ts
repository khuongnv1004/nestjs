/* eslint-disable prettier/prettier */
import { Document, Schema } from 'mongoose';

const PostSchema = new Schema(
  {
    title: String,
    description: String,
    content: String,
    post_date: { type: Date, default: Date.now },
    tag: [{type:Schema.Types.ObjectId, ref: 'tags'}],
    image: [{type:String}],
    status: { type: String, ref: 'status' },
    comments: [{type:Schema.Types.ObjectId, ref:"comments"}],
    author: String,
  },
  {
    timestamps: true,
    collection: 'posts',
  },
);

export { PostSchema };

export interface Post extends Document {
  title: string;
  description: string;
  content: string;
  post_date: string;
  tag: [];
  image: [];
  status: string;
  comments: [];
  author: string;
}
