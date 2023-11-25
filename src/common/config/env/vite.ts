export const Env = {
  VITE_BUILDED: (import.meta.env.VITE_BUILDED ?? 'false') === 'true',

  VITE_RENDERER_ENV_EXAMPLE: import.meta.env.VITE_RENDERER_ENV_EXAMPLE ?? '',
  VITE_ENV_EXAMPLE: import.meta.env.VITE_ENV_EXAMPLE ?? '',
  VITE_RENDERER_BACKEND_PORT: parseInt(
    import.meta.env.VITE_RENDERER_BACKEND_PORT ?? '8020',
  ),

  VITE_DATABASE_HOST: import.meta.env.VITE_DATABASE_HOST ?? '',
  VITE_DATABASE_USER: import.meta.env.VITE_DATABASE_USER ?? '',
  VITE_DATABASE_PASSWORD: import.meta.env.VITE_DATABASE_PASSWORD ?? '',
  VITE_DATABASE_PORT: import.meta.env.VITE_DATABASE_PORT ?? '',
  VITE_DATABASE_NAME: import.meta.env.VITE_DATABASE_NAME ?? '',
  VITE_DATABASE_URL: import.meta.env.VITE_DATABASE_URL ?? '',
};
