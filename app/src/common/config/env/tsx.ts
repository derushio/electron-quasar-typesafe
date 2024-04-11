import { configDotenv } from 'dotenv';

let env: Record<string, string | undefined> = {};
try {
  configDotenv();
  env = process.env;
} catch {}

export const Env = {
  VITE_BUILDED: (env.VITE_BUILDED ?? 'false') === 'true',

  VITE_RENDERER_APP_NAME: env.VITE_RENDERER_APP_NAME ?? '',

  VITE_RENDERER_ENV_EXAMPLE: env.VITE_RENDERER_ENV_EXAMPLE ?? '',
  VITE_ENV_EXAMPLE: env.VITE_ENV_EXAMPLE ?? '',
  VITE_RENDERER_BACKEND_PORT: parseInt(
    env.VITE_RENDERER_BACKEND_PORT ?? '8020',
  ),
  VITE_RENDERER_BACKEND_URL:
    env.VITE_RENDERER_BACKEND_URL ?? 'http://localhost:8020/trpc',

  VITE_DATABASE_MAIN_URL: env.VITE_DATABASE_MAIN_URL ?? '',

  VITE_DATABASE_SUB_HOST: env.VITE_DATABASE_SUB_HOST ?? '',
  VITE_DATABASE_SUB_PORT: Number(env.VITE_DATABASE_SUB_PORT ?? '5432'),
  VITE_DATABASE_SUB_USER: env.VITE_DATABASE_SUB_USER ?? '',
  VITE_DATABASE_SUB_PASSWORD: env.VITE_DATABASE_SUB_PASSWORD ?? '',
  VITE_DATABASE_SUB_NAME: env.VITE_DATABASE_SUB_NAME ?? '',
};
