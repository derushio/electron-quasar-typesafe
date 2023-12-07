import { appTrpcRouter } from '#/controllers/trpc/router';
import * as trpcExpress from '@trpc/server/adapters/express';
import { nodeHTTPFormDataContentTypeHandler } from '@trpc/server/adapters/node-http/content-type/form-data';
import { nodeHTTPJSONContentTypeHandler } from '@trpc/server/adapters/node-http/content-type/json';
import cors from 'cors';
import express from 'express';

export function createTrpcServer() {
  const app = express();
  app.use(
    trpcExpress.createExpressMiddleware({
      middleware: cors(),
      router: appTrpcRouter,
      experimental_contentTypeHandlers: [
        nodeHTTPFormDataContentTypeHandler(),
        nodeHTTPJSONContentTypeHandler(),
      ],
      createContext(opts) {
        return { req: opts.req };
      },
      maxBodySize: 1 * 1024 * 1024 * 1024,
    }),
  );
  return app;
}
