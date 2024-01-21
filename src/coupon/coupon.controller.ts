import { Controller, Get } from '@nestjs/common';
import { CouponService } from './coupon.service';

@Controller('coupon')
export class CouponController {
  constructor(private service: CouponService) {}

  @Get()
  async getBooks() {
    return await this.service.getCoupons();
  }
}
