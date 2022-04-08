import { Controller, Get, Param } from '@nestjs/common';
import { iStatementInfo, statements } from 'src/statements';

@Controller('statements')
export class StatementsController {
  constructor() {}

  @Get()
  async index(): Promise<iStatementInfo[]> {
    return statements;
  }
}
