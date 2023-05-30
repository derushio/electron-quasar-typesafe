// import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-server-fn'],
  build: {
    transpile: ['nuxt-server-fn'],
  },
});
