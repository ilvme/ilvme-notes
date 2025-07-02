import { defineConfig } from 'vitepress'
import nav from './configs/nav'
import sidebar from './configs/sidebar'

export default defineConfig({
  title: '林深时觉寒的技术笔记',
  description: 'A VitePress Site',
  lang: 'zh-CN',

  srcDir: './notes',
  outDir: './dist',
  srcExclude: ['**/README.md', '**.todo.md'],

  themeConfig: {
    search: { provider: 'local' },
    outline: { label: '目录', level: [2, 3] },

    nav,
    sidebar,

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],

    docFooter: { prev: '上一篇', next: '下一篇' },

    notFound: {
      code: '404',
      title: '页面未找到',
      quote: '你来到了没有知识的荒原',
      linkText: '回到最初',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present 林深时觉寒',
    },
  },
})
