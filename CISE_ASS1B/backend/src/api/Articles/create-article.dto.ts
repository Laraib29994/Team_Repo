import { Date } from 'mongoose';

export class CreateArticleDto {
  title?: string;               // Title of the article (optional)
  authors?: string;             // Authors of the article (optional)
  DOI?: string;                 // DOI (Digital Object Identifier) (optional)
  publication_year?: Date;      // Publication year as a Date object (optional)
  volume?: string;              // Volume number (string to support formats) (optional)
  number?: number;              // Issue number (using number type) (optional)
  pages?: number;               // Number of pages (using number type) (optional)
  content?: string;             // Content of the article (optional)
  updated_date?: Date;          // Updated date (optional for consistency)
  status?: String;              //added status for que
}
