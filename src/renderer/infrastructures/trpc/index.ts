import type { AppRouter } from '#/controllers/trpc/router/index';
import { createTRPCProxyClient, httpLink } from '@trpc/client';
import { Env } from '^/config/env';
import { ipcLink } from 'electron-trpc/renderer';
import superjson from 'superjson';

Env;
httpLink;

export const trpc = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    // Electron環境向け
    ipcLink(),
    // Server環境向け
    // httpLink({
    //   url: `http://localhost:${Env.VITE_RENDERER_BACKEND_PORT}`,
    // }),
  ],
});
