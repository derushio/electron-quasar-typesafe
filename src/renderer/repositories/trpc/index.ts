import type { AppRouter } from '#/controllers/trpc/router/index';
import { createTRPCProxyClient } from '@trpc/client';
import { ipcLink } from 'electron-trpc/renderer';
import superjson from 'superjson';

export const trpc = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [ipcLink()],
});
