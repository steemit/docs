import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
  title: 'Steem Docs',
  description: "The Documentation for the Steem Blockchain",
  base: '/docs/',
  dest: 'docs/.vuepress/dist',
});
