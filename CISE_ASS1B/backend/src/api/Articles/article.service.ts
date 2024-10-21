import { Injectable } from '@nestjs/common';
import { Article } from './article.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleDto } from './create-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Article') private readonly articleModel: Model<Article>,
  ) {}

  /*
  constructor(@InjectModel(Article.name) private articleModel: Model<Article>) {}
  */

  test(): string {
    return 'article route testing';
  }

  async findAll(): Promise<Article[]> {
    return await this.articleModel.find().exec();
  }

  async findOne(id: string): Promise<Article> {
    return await this.articleModel.findById(id).exec();
  }

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel({
      ...createArticleDto,
      status: 'Pending', // Assign 'Pending' status here
    });
    return await createdArticle.save();
  }

  async update(id: string, updateData: Partial<Article>): Promise<Article | null> {
    try {
      // Debugging: Log the incoming data
      console.log('Updating article with data:', updateData);
  
      // Use Mongoose's `findByIdAndUpdate` to update the document
      const updatedArticle = await this.articleModel.findByIdAndUpdate(
        id,
        { $set: updateData }, // Ensure the rating is being set here
        { new: true, upsert: false } // `new: true` returns the updated document
      ).exec();
  
      return updatedArticle;
    } catch (error) {
      console.error('Database Update Error:', error); // Log any database errors
      throw error;
    }
  }

  /*
  async update(id: string, updateDto: CreateArticleDto): Promise<Article | null> {
    return await this.articleModel.findByIdAndUpdate(
      id,
      { $set: updateDto }, // This will set any valid fields, including 'rating'
      { new: true } // Return the updated article
    ).exec();
  }

  /*
  async update(id: string, createArticleDto: CreateArticleDto) {
    return await this.articleModel.findByIdAndUpdate(id, createArticleDto).exec();
  }
    */

  async delete(id: string) {
    const deletedArticle = await this.articleModel.findByIdAndDelete(id).exec();
    return deletedArticle;
  }


}
