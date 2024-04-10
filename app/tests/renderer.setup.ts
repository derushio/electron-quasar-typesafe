import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { vi } from 'vitest';

vi.mock('@trpc/client', () => ({
  createTRPCProxyClient: vi.fn(),
  httpLink: vi.fn(),
  splitLink: vi.fn(),
  experimental_formDataLink: vi.fn(),
}));

vi.mock('@tanstack/vue-query', () => ({
  useQuery: vi.fn(),
  useMutation: vi.fn(),
}));

installQuasarPlugin();
