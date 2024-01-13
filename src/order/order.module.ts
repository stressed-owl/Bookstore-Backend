import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookOrder } from './order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookOrder])],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
