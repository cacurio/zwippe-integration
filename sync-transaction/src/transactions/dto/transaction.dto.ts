import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';

const TransactionSchema = z.object({
  externalId: z.number(),
  account: z.string(),
  amount: z.number(),
});

export class TransactionDTO extends createZodDto(TransactionSchema) {}
