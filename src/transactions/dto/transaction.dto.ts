import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';

const TransactionSchema = z.object({
  externalId: z.string(),
  numberAccount: z.string(),
});

export class TransactionDTO extends createZodDto(TransactionSchema) {}
