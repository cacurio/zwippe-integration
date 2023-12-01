import { Inject } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Transaction } from './entity/transaction.entity';

@Resolver(() => Transaction)
export class TransactionResolver {
  constructor(
    @Inject(TransactionsService)
    private transactionService: TransactionsService,
  ) {
    this.transactionService = transactionService;
  }
  @Query(() => Transaction)
  async transaction(@Args('id') id: number): Promise<Transaction> {
    return await this.transactionService.findOne(id);
  }
}
