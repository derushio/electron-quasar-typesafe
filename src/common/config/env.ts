export const Env = {
  VITE_MAIN_ENV_EXAMPLE: import.meta.env.VITE_MAIN_ENV_EXAMPLE ?? '',
  VITE_MAIN_BACKEND_PORT: parseInt(
    import.meta.env.VITE_MAIN_BACKEND_PORT ?? '8020',
  ),
};
