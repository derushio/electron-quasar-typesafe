import { env } from './common/env';

import { defineNuxtConfig } from 'nuxt/config';
import path from 'path';

process.env.NODE_ENV = env.DEBUGGING ? 'development' : 'production';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dev: env.DEBUGGING,
  modules: ['nuxt-quasar-ui', 'nuxt-server-fn'],
  build: {
    transpile: ['nuxt-server-fn', 'defu'],
  },
  css: [
    'quasar/dist/quasar.prod.css',
    '@quasar/extras/material-icons/material-icons.css',
  ],
  alias: {
    '@/': `${path.join(__dirname)}/`,
    '$/': `${path.join(__dirname, 'common')}/`,
    '%/': `${path.join(__dirname, 'prisma')}/`,
  },
  vite: {
    build: {
      target: 'node18',
    },
  },
  ...{
    quasar: {
      plugins: ['Dialog', 'Loading', 'Notify'],
    },
  },
});
