import { appTrpcRouter } from '#/controllers/trpc/router';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';

export function createTrpcServer() {
  return createHTTPServer({
    middleware: cors(),
    router: appTrpcRouter,
  });
}
