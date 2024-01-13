import { BookOrder } from './order.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(BookOrder)
    private readonly orderRepository: Repository<BookOrder>,
  ) {}

  async findAll(): Promise<BookOrder[]> {
    return this.orderRepository.find();
  }

  async findById(id: number): Promise<BookOrder> {
    return this.orderRepository.findOneByOrFail({ id: id });
  }

  async create(order: BookOrder): Promise<BookOrder> {
    return this.orderRepository.save(order);
  }

  async update(id: number, order: BookOrder): Promise<BookOrder> {
    await this.orderRepository.update(id, order);
    return this.orderRepository.findOneByOrFail({ id: id });
  }

  async delete(id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }
}
