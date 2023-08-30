import { createTrpcServer } from '#/controllers/trpc/server';
import { Env } from '$/config/env';
import { configDotenv } from 'dotenv';

configDotenv();

async function main() {
  const server = createTrpcServer();
  server.listen(Env.VITE_RENDERER_BACKEND_PORT);

  console.log(Env.VITE_ENV_EXAMPLE);
  console.log(Env.VITE_RENDERER_ENV_EXAMPLE);

  console.log(
    `Server listen: http://localhost:${Env.VITE_RENDERER_BACKEND_PORT}`,
  );
}

void main();
