import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { UserConfig, defineConfig } from 'vite';

const alias = {
  '&/': `${path.join(__dirname)}/`,
  '$/': `${path.join(__dirname, 'src', 'renderer')}/`,
  '#/': `${path.join(__dirname, 'src', 'main')}/`,
  '^/': `${path.join(__dirname, 'src', 'common')}/`,
};

const MODE = process.env.MODE === 'BACKEND';
export const config = {
  envPrefix: MODE ? 'VITE_' : 'VITE_RENDERER_',
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: './src/renderer/assets/styles/quasar-variables.scss',
    }),
  ],
  resolve: {
    alias: {
      ...alias,
      ...(MODE
        ? {
            electron: path.join(__dirname, 'src', 'main', 'mock', 'electron'),
          }
        : {}),
    },
  },
  root: path.join(__dirname, 'src'),
  envDir: path.join(__dirname),
  test: {
    environment: 'happy-dom',
    setupFiles: [path.join(__dirname, 'tests', 'renderer.setup.ts')],
    include: [path.join(__dirname, 'tests/**/*.spec.ts')],
    exclude: [],
    coverage: {
      provider: 'v8',
      all: true,
      clean: true,
      reportsDirectory: './_coverage',
    },
  },
} satisfies UserConfig;

export default defineConfig(config);
