import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import path from 'path';

const alias = {
  '@/': `${path.join(__dirname)}/`,
  '$/': `${path.join(__dirname, 'common')}/`,
  '%/': `${path.join(__dirname, 'prisma')}/`,
  'node-fetch-native/polyfill': `${path.join(
    __dirname,
  )}/node_modules/node-fetch-native/dist/polyfill.mjs`,
};

export default defineConfig({
  main: {
    build: {
      target: 'node18',
      lib: {
        entry: './src/main/index.mts',
      },
    },
    resolve: {
      alias: alias,
    },
    plugins: [
      externalizeDepsPlugin({
        exclude: ['devalue'],
      }),
    ],
  },
  preload: {
    resolve: {
      alias: alias,
    },
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    publicDir: './.output/public',
  },
});
