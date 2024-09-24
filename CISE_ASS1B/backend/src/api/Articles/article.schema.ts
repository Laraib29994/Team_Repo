import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article {
  @Prop()
  title?: string;

  @Prop()
  authors?: string; // Changed from author to authors

  @Prop()
  DOI?: string;

  @Prop()
  content?: string;

  @Prop({ type: Date })
  publication_year?: Date; // Changed from published_date to publication_year

  @Prop()
  volume?: string;

  @Prop()
  number?: number;

  @Prop()
  pages?: number;

  @Prop({ type: Date, default: Date.now })
  updated_date?: Date; // Optional, auto-set to the current date
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
