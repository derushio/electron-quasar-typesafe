import { Env } from '^/config/env';
import { app } from 'electron';
import path from 'path';

export const MAIN_DB_HOST = Env.VITE_BUILDED
  ? path.join(app?.getPath('userData'), 'db', 'db.db')
  : Env.VITE_DATABASE_URL;
