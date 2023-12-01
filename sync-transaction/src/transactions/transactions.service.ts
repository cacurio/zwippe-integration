import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Transaction } from './entity/transaction.entity';
import { TransactionDTO } from './dto/transaction.dto';
import { TransactionType } from './enum';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  async saveComplete(transactionDTO: TransactionDTO): Promise<number> {
    const { id } = await this.saveTransaction(
      transactionDTO,
      TransactionType.COMPLETED,
    );
    return id;
  }
  async saveFailed(transactionDTO: TransactionDTO): Promise<number> {
    const { id } = await this.saveTransaction(
      transactionDTO,
      TransactionType.FAILED,
    );
    return id;
  }

  async findOne(id: number): Promise<Transaction> {
    return await this.transactionRepository.findOne({ where: { id } });
  }

  private saveTransaction(
    transactionDTO: TransactionDTO,
    status: TransactionType,
  ): Promise<Transaction> {
    const newTransaction = Transaction.convertFromDTO(transactionDTO, status);
    return this.transactionRepository.save(newTransaction);
  }
}
