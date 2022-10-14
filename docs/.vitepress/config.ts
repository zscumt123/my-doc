import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '个人文档',
  description: '个人学习过程中的笔记',
  lastUpdated: true,
  themeConfig: {
    siteTitle: '个人文档',
    outlineTitle: '本页目录',
    outline: 'deep',
    socialLinks:[
      { icon: 'github', link: 'https://github.com/zscumt123' }
    ],
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          {
            // Title for the section.
            text: 'Section A Title',
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      },
      {
        text: 'Dropdown Menu',
        items: [
          {
            // You may also omit the title.
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      }
    ],
    sidebar: [
      {
        text: '前端',
        collapsible: true,
        items: [
          { 
            text: 'Nuxt',
            // collapsible: true,
            // collapsed: true,
            link:'/nuxt/',
            items: [
              { text: '快速开始', link: '/nuxt/start' }
            ]
           },
          { text: 'Vue', link: '/item-b' }
        ]
      },
      {
        text: '后端',
        collapsible: true,
        items: [
          { text: 'Rust', link: '/item-c' },
          { text: '数据库', link: '/item-d' }
        ]
      }
    ],

  }
})
