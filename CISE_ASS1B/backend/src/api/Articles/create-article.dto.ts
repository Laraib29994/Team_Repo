import { Date } from 'mongoose';

export class CreateArticleDto {
  title: string;
  descriptor: string; // Changed from 'isbn' to 'descriptor'
  author: string;
  description: string;
  published_date: Date;
  publisher: string;
  updated_date?: Date; // Made optional since it may not be provided during creation
}
