import { defineConfig } from 'vitepress'
import nav from './configs/nav'
import sidebar from './configs/sidebar'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: '林深时觉寒的技术笔记',
  description: 'A VitePress Site',
  lang: 'zh-CN',

  srcDir: 'notes',
  srcExclude: ['**/README.md', '**.todo.md'],

  themeConfig: {
    search: { provider: 'local' },
    outline: { label: '目录', level: [2, 3] },

    nav,
    sidebar,

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],

    docFooter: { prev: '上一篇', next: '下一篇' },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present 林深时觉寒',
    },
  },
})
