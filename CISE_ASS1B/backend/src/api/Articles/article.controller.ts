import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './create-article.dto';
import { error } from 'console';

@Controller('api/articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('/test')
  test() {
    return this.articleService.test();
  }

  // Get all articles
  @Get('/')
  async findAll() {
    try {
      return this.articleService.findAll();
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No Articles found',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }

  // Get one article by id
  @Get('/:id')
  async findOne(@Param('id') id: string) {
    try {
      return this.articleService.findOne(id);
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No Article found',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }

  // Create/add an article
  @Post('/')
  async addArticle(@Body() createArticleDto: CreateArticleDto) {
    try {
      await this.articleService.create(createArticleDto);
      return { message: 'Article added successfully' };
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Unable to add this article',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }

/*
  @Put('/:id')
  async updateArticle(
    @Param('id') id: string,
    @Body() createArticleDto: CreateArticleDto, // Ensure rating comes in here
  ) {
    try {
      console.log('Received Data:', createArticleDto); // Debugging: Ensure rating arrives
  
      const updatedArticle = await this.articleService.update(id, createArticleDto);
  
      if (!updatedArticle) {
        throw new HttpException(`Article with ID ${id} not found.`, HttpStatus.NOT_FOUND);
      }
  
      return { message: 'Article updated successfully', article: updatedArticle };
    } catch (error) {
      console.error('Update Error:', error); // Log errors
      throw new HttpException('Unable to update this article', HttpStatus.BAD_REQUEST);
    }
  }
*/

  
  
  // Update an article
  @Put('/:id')
  async updateArticle(
    @Param('id') id: string,
    @Body() createArticleDto: CreateArticleDto,
  ) {
    try {
      await this.articleService.update(id, createArticleDto);
      return { message: 'Article updated successfully' };
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Unable to update this article',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }

    

  // Delete an article by id
  @Delete('/:id')
  async deleteArticle(@Param('id') id: string) {
    try {
      return await this.articleService.delete(id);
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No such article found',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }

  /*
  @Put('/:id')
  async updateArticle(
    @Param('id') id: string,
    @Body() createArticleDto: CreateArticleDto,
  ) {
    try {
      // Check if the request body contains a rating field
      if (createArticleDto.rating !== undefined) {
        // First, find the article by ID
        const article = await this.articleService.findOne(id);
        if (article) {
          // If the article does not have a rating, set it
          if (article.rating === undefined) {
            await this.articleService.updateRating(id, createArticleDto.rating);
          } else {
            // If rating exists, update it
            await this.articleService.updateRating(id, createArticleDto.rating);
          }
        }
      }
      
      // Update other article fields (if any)
      await this.articleService.update(id, createArticleDto); 
  
      return { message: 'Article updated successfully' };
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Unable to update this article',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
*/
}
