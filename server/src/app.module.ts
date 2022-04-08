import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AuthorizedModule } from './modules/authorized/authorized.module';
import { CustomerModule } from './modules/customers/customer.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { StatementsModule } from './modules/statements/statements.module';
import { TransactionsModule } from './modules/transactions/transactions.module';

@Module({
  controllers: [AppController],
  providers: [UsersService],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AuthorizedModule,
    CustomerModule,
    StatementsModule,
    TransactionsModule,
    AuthModule,
  ],
})
export class AppModule {}
