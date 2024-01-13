import { ContactUs } from './contact.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactUs)
    private readonly contactRepository: Repository<ContactUs>,
  ) {}

  async create(contact: ContactUs): Promise<ContactUs> {
    return this.contactRepository.save(contact);
  }
}
