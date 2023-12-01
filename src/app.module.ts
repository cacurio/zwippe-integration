import { Module } from '@nestjs/common';
import { TransactionsModule } from './transactions/transactions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//import databaseConfig from './config/database.config';

// TypeOrmModule.forRoot(databaseConfig())

@Module({
  imports: [
    TransactionsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'root',
      password: 'root',
      database: 'zwippe',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
