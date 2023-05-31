import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-quasar-ui', 'nuxt-server-fn'],
  build: {
    transpile: ['nuxt-server-fn', 'defu'],
  },
  css: [
    'quasar/dist/quasar.prod.css',
    '@quasar/extras/material-icons/material-icons.css',
  ],
  alias: {
    '@/': './',
    '$/': './common/',
    '%/': './prisma/',
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
