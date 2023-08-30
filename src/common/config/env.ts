export const Env = {
  VITE_RENDERER_ENV_EXAMPLE: import.meta.env.VITE_RENDERER_ENV_EXAMPLE ?? '',
  VITE_ENV_EXAMPLE: import.meta.env.VITE_ENV_EXAMPLE ?? '',
  VITE_RENDERER_BACKEND_PORT: parseInt(
    import.meta.env.VITE_RENDERER_BACKEND_PORT ?? '8020',
  ),
};
