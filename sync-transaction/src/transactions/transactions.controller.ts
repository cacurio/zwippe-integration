import { Body, Controller, Post } from '@nestjs/common';
import { TransactionDTO } from './dto/transaction.dto';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionService: TransactionsService) {}

  @Post('completed')
  create(
    @Body()
    request: TransactionDTO,
  ) {
    return this.transactionService.saveComplete(request);
  }

  @Post('failed')
  saveFailed(
    @Body()
    request: TransactionDTO,
  ) {
    return this.transactionService.saveFailed(request);
  }
}
