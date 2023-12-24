import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConnectionConfig } from './config/typeorm.config';

const envModule = ConfigModule.forRoot({
  isGlobal: true,
});

@Module({
  imports: [
    envModule,
    TypeOrmModule.forRoot(typeOrmConnectionConfig),
    BooksModule,
  ],
})
export class AppModule {}
