import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.entity/book.entity';

@Controller('books')
export class BooksController {
  constructor(private service: BooksService) {}

  @Get()
  async getBooks() {
    return await this.service.getBooks();
  }

  @Get(':id')
  async getBook(@Param('id') id: string) {
    return await this.service.getBook(id);
  }

  @Post()
  async createBook(@Body() book: Book) {
    const _book = await this.service.createBook(book);

    if (!_book) {
      return 'error in creating a book';
    }

    return 'book added';
  }

  @Put(':id')
  async updateBook(@Param('id') id: string, @Body() book: Book) {
    await this.service.updateBook(id, book);
    return 'book updated';
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string) {
    await this.service.deleteBook(id);
    return 'book deleted';
  }
}
