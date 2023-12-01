import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TransactionDTO } from '../dto/transaction.dto';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Transaction {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;
  @Field()
  @Column({ name: 'external_id', nullable: false })
  externalId: number;
  @Field()
  @Column({ name: 'account', nullable: false })
  account: string;
  @Field()
  @Column({ name: 'status', nullable: false })
  status: string;
  @Field()
  @Column({ name: 'created_at' })
  createdAt: Date;
  @Field()
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
