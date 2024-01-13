import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { BookOrder } from './order.entity';

@Controller('order')
export class OrderController {
  constructor(private service: OrderService) {}

  @Get()
  async getOrders() {
    return await this.service.findAll();
  }

  @Get(':id')
  async getOrder(@Param('id') id: string) {
    return await this.service.findById(parseInt(id, 10));
  }

  @Post()
  async createOrder(@Body() order: BookOrder) {
    const _order = await this.service.create(order);

    if (!_order) {
      return 'error in creating a order';
    }

    return 'order added';
  }

  @Put(':id')
  async updateOrder(@Param('id') id: string, @Body() order: BookOrder) {
    await this.service.update(parseInt(id, 10), order);
    return 'order updated';
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: string) {
    await this.service.delete(parseInt(id, 10));
    return 'order deleted';
  }
}
