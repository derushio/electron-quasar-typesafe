import { DB_HOST } from '#/repositories/db/host';
import { PrismaClient } from '@prisma/client';

export const pc = new PrismaClient({
  datasources: {
    db: {
      url: DB_HOST,
    },
  },
});
