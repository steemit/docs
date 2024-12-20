import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
      },
    },
  }),
  title: 'Steem Docs',
  description: "The Documentation for the Steem Blockchain",
  base: '/docs/',
  dest: 'docs/.vuepress/dist',
  lang: 'en-US',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Steem Docs',
      description: "The Documentation for the Steem Blockchain",
    },
    '/zh/': {
      lang: 'zh-CN',
    },
  },
});
