import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TransactionDTO } from '../dto/transaction.dto';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'external_id', nullable: false })
  externalId: number;
  @Column({ name: 'account', nullable: false })
  account: string;
  @Column({ name: 'status', nullable: false })
  status: string;
  @Column({ name: 'created_at' })
  createdAt: Date;
  @Column({ name: 'amount', type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  public static convertFromDTO(
    transactionDTO: TransactionDTO,
    status: string,
  ): Transaction {
    const newTransaction = new Transaction();
    newTransaction.externalId = transactionDTO.externalId;
    newTransaction.status = status;
    newTransaction.account = transactionDTO.account;
    newTransaction.createdAt = new Date();
    newTransaction.amount = transactionDTO.amount;
    return newTransaction;
  }
}
