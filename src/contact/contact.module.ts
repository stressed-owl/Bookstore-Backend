import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { ContactUs } from './contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactUs])],
  providers: [ContactService],
  controllers: [ContactController],
})
export class ContactModule {}
