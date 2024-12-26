import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ZCST-OpenCS",
  description: "Mutual aid scheme",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '文档', link: '/catalog' }
    ],

    sidebar: [
      {
        text: '大一',
        items: []
      },
      {
        text: '大二',
        items: []
      },
      {
        text: '大三',
        items: [
          { text: '人工智能理论与应用', link: '/collection/junior/courses/ai' },
        ]
      },
      {
        text: '大四',
        items: []
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZCST-OpenCS' }
    ]
  }
})
