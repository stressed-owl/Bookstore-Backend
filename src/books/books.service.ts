import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
  ) {}

  getBooks(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  getBook(id: string): Promise<Book> {
    try {
      return this.booksRepository.findOneOrFail({
        where: { id: parseInt(id, 10) },
      });
    } catch (err) {
      console.log('Get one product by id error: ', err.message ?? err);
      throw new HttpException(
        `Product with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  createBook(book: Book): Promise<Book> {
    return this.booksRepository.save(book);
  }

  updateBook(id: string, book: Book): Promise<any> {
    return this.booksRepository
      .createQueryBuilder()
      .update(Book)
      .set({
        name: book.name,
        author: book.author,
        genre: book.genre,
        description: book.description,
        price: book.price,
      })
      .where('id = :id', { id })
      .execute();
  }

  deleteBook(id: string): Promise<any> {
    return this.booksRepository
      .createQueryBuilder()
      .delete()
      .from(Book)
      .where('id = :id', { id })
      .execute();
  }
}
