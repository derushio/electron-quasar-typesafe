import { DB_HOST } from '#/repositories/db/host';
import { Env } from '$/config/env';
import { PrismaClient } from '@prisma/client';

console.log(Env.VITE_BUILDED);
console.log(`file:${DB_HOST}`);

export const pc = new PrismaClient({
  datasources: {
    db: {
      url: `file:${DB_HOST}`,
    },
  },
});
