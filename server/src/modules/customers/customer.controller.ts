import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import customers, { iCustomer } from '../../customers';

@Controller('customers')
export class CustomerController {
  constructor() {}

  @Get()
  async index(): Promise<iCustomer[]> {
    return customers;
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async show(@Param('id') id: string): Promise<iCustomer> {
    return customers.find((c) => c.id === Number(id));
  }
}
