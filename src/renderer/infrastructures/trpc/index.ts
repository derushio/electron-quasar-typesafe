import type { AppRouter } from '#/controllers/trpc/router/index';
import {
  createTRPCProxyClient,
  experimental_formDataLink,
  httpLink,
  splitLink,
} from '@trpc/client';
import { Env } from '^/config/env';
import superjson from 'superjson';

export const trpc = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    // Server環境向け
    splitLink({
      condition: (op) => op.input instanceof FormData,
      true: experimental_formDataLink({
        url: `http://localhost:${Env.VITE_RENDERER_BACKEND_PORT}`,
      }),
      false: httpLink({
        url: `http://localhost:${Env.VITE_RENDERER_BACKEND_PORT}`,
      }),
    }),
  ],
});
