import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../../base.repository';
import { Tag } from '../models/tag.model';

@Injectable()
export class TagRepository extends BaseRepository<Tag> {
  constructor(
    @InjectModel('Tag')
    private readonly tagModel: Model<Tag>,
  ) {
    super(tagModel);
  }
}