import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ZCST-OpenCS",
  description: "Mutual aid scheme",
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '文档', link: '/catalog' }
    ],

    sidebar: [
      {
        text: '大一',
        collapsed: false,
        items: []
      },
      {
        text: '大二',
        collapsed: false,
        items: []
      },
      {
        text: '大三',
        collapsed: false,
        items: [
          { text: '人工智能理论与应用', link: '/collection/junior/courses/ai' },
        ]
      },
      {
        text: '大四',
        collapsed: false,
        items: []
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZCST-OpenCS' }
    ]
  },
  lastUpdated: true
})
