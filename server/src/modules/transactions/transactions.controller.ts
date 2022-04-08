import { Controller, Get, Param } from '@nestjs/common';
import { iTransactionInfo, transactions } from 'src/transactions';

@Controller('transactions')
export class TransactionsController {
  constructor() {}

  @Get()
  async index(): Promise<iTransactionInfo[]> {
    return transactions;
  }
}
