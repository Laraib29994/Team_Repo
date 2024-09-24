import { Date } from 'mongoose';

export class CreateArticleDto {
  title?: string;
  authors?: string; // Changed from 'author' to 'authors'
  DOI?: string;
  publication_year?: Date; // Keep this as Date for consistency
  volume?: string;
  number?: number; // Changed from int to number
  pages?: number; // Changed from int to number
  updated_date?: Date; // Made optional, consistent with Article type
}
