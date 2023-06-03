import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import path from 'path';

const alias = {
  '~/': `${path.join(__dirname)}/`,
  '@/': `${path.join(__dirname, 'src', 'renderer')}/`,
  '#/': `${path.join(__dirname, 'src', 'main')}/`,
  '$/': `${path.join(__dirname, 'src', 'common')}/`,
  '%/': `${path.join(__dirname, 'prisma')}/`,
};

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: alias,
    },
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: alias,
    },
  },
  renderer: {
    plugins: [
      vue({
        template: { transformAssetUrls },
      }),
      quasar({
        sassVariables: './src/renderer/assets/styles/quasar-variables.scss',
      }),
    ],
    resolve: {
      alias: alias,
    },
  },
});
