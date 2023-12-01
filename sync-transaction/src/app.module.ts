import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TransactionsModule } from './transactions/transactions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormatResponseMiddleware } from './transactions/middleware/format.response.middleware';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TransactionsModule,
    TypeOrmModule.forRoot(databaseConfig()),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FormatResponseMiddleware).forRoutes('*');
  }
}
