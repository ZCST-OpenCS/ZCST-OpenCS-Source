import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ZCST-OpenCS",
  description: "Mutual aid scheme",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    logo: "/logo.svg",
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "文档", link: "/catalog" },
      { text: "关于", link: "/about" },
    ],

    sidebar: [
      {
        text: "大一",
        link: "/collection/freshman/",
        collapsed: false,
        items: [],
      },
      {
        text: "大二",
        link: "/collection/sophomore/",
        collapsed: false,
        items: [],
      },
      {
        text: "大三",
        link: "/collection/junior/",
        collapsed: false,
        items: [
          { text: "人工智能理论与应用", link: "/collection/junior/courses/ai" },
          {
            text: "软件工程",
            link: "/collection/junior/courses/software-engineering",
          },
          {
            text: "机器学习",
            link: "/collection/junior/courses/machine-learning",
          },
          {
            text: "javaWeb 开发技术",
            link: "/collection/junior/courses/javaweb",
          },
          {
            text: "智能设备接口技术",
            link: "/collection/junior/courses/smart-devices",
          },
          {
            text: "毛泽东思想和中国特色社会主义理论体系概论",
            link: "/collection/junior/courses/mao-zedong-thought",
          },
          {
            text: "计算机网络",
            link: "/collection/junior/courses/computer-networks",
          },
          {
            text: "嵌入式系统设计与应用",
            link: "/collection/junior/courses/embedded-systems",
          },
        ],
      },
      {
        text: "大四",
        link: "/collection/senior/",
        collapsed: false,
        items: [],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/ZCST-OpenCS" }],
  },
  lastUpdated: true,
});
