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
});

const c = config as unknown;
export default c;
