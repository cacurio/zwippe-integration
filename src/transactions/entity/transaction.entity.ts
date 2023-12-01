import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TransactionDTO } from '../dto/transaction.dto';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'external_id', nullable: false })
  externalId: string;
  @Column({ name: 'number_account', nullable: false })
  numberAccount: string;
  @Column({ name: 'status', nullable: false })
  status: string;
  @Column({ name: 'created_at' })
  createdAt: Date;

  public static convertFromDTO(
    transactionDTO: TransactionDTO,
    status: string,
  ): Transaction {
    const newTransaction = new Transaction();
    newTransaction.externalId = transactionDTO.externalId;
    newTransaction.status = status;
    newTransaction.numberAccount = transactionDTO.numberAccount;
    newTransaction.createdAt = new Date();
    return newTransaction;
  }
}
