import { Document, Schema } from 'mongoose';

const TagSchema = new Schema(
  {
    tag_name: String,
    
  },
  {
    timestamps: true,
    collection: 'tags',
  },
);

export { TagSchema };

export interface Tag extends Document {
    tag_name: string
}