import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

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
      outDir: path.join(__dirname, '.electron'),
      watch: {
        include: ['./**/*.mts', './**/*.ts'],
      },
    },
    resolve: {
      alias: alias,
    },
    plugins: [
      externalizeDepsPlugin({
        exclude: ['devalue', 'nuxi'],
      }),
      viteStaticCopy({
        targets: [
          {
            src: path.join(__dirname, '.output', 'public'),
            dest: path.join(__dirname, '.electron'),
          },
        ],
      }),
    ],
  },
  preload: {
    build: {
      target: 'node18',
      lib: {
        entry: './src/preload/index.mts',
      },
      watch: {
        include: ['./**/*.mts', './**/*.ts'],
      },
    },
    resolve: {
      alias: alias,
    },
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {},
});
