import dotenv from 'dotenv';

dotenv.config();

if (process.env.DEBUGGING == null) {
  dotenv.config({
    // TODO: 改善
    path: './resources/app/.env',
  });
}

export const env = {
  DEBUGGING: process.env.DEBUGGING === 'true',
  APP_PORT: Number(process.env.APP_PORT ?? 80),
  APP_URL: process.env.APP_URL ?? '',
};
