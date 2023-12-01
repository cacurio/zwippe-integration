import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entity/transaction.entity';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { TransactionResolver } from './transaction.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])],
  controllers: [TransactionsController],
  providers: [
    TransactionsService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    TransactionResolver,
  ],
  exports: [TransactionsService],
})
export class TransactionsModule {}
