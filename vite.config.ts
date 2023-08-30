import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

const alias = {
  '~/': `${path.join(__dirname)}/`,
  '@/': `${path.join(__dirname, 'src', 'renderer')}/`,
  '#/': `${path.join(__dirname, 'src', 'main')}/`,
  '$/': `${path.join(__dirname, 'src', 'common')}/`,
  '%/': `${path.join(__dirname, 'prisma')}/`,
};

export default defineConfig({
  envPrefix: 'VITE_',
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
  root: path.join(__dirname, 'src', 'renderer'),
  envDir: path.join(__dirname),
});
