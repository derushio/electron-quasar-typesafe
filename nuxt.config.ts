import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-quasar-ui', 'nuxt-server-fn'],
  build: {
    transpile: ['nuxt-server-fn'],
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
  ...{
    quasar: {
      plugins: ['Dialog', 'Loading', 'Notify'],
    },
  },
});
