import { defineNuxtConfig } from 'nuxt/config';
import path from 'path';

const alias = {
  '&/': `${path.join(__dirname)}/`,
  '$/': `${path.join(__dirname, 'src', 'renderer')}/`,
  '#/': `${path.join(__dirname, 'src', 'main')}/`,
  '^/': `${path.join(__dirname, 'src', 'common')}/`,
};

const config = defineNuxtConfig({
  alias: alias,
  rootDir: path.join(__dirname, 'src', 'renderer', 'presentations'),
  modules: ['@pinia/nuxt', 'nuxt-quasar-ui', '@hebilicious/vue-query-nuxt'],
  ...({
    quasar: {
      sassVariables: path.join(
        __dirname,
        'src',
        'renderer',
        'assets',
        'styles',
        'quasar-variables.scss',
      ),
      plugins: ['Dialog', 'Loading', 'Notify'],
    },

    vueQuery: {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      },
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any),
});

const c = config as unknown;
export default c;
