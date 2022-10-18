import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '个人文档',
  description: '个人学习过程中的笔记',
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    siteTitle: '个人文档',
    outlineTitle: '本页目录',
    outline: 'deep',
    lastUpdatedText: '上次更新时间',
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
            link:'/nuxt/',
            items: [
              { text: '快速开始', link: '/nuxt/start' },
              { text: '目录结构和别名', link: '/nuxt/dir-structure' },
              { text: '入口文件和路由', link: '/nuxt/router' },
              { text: '路由中间件', link: '/nuxt/router-middleware' },
              { text: '组件', link: '/nuxt/components' },
              { text: '布局', link: '/nuxt/layout' },
              { text: '组合式逻辑与状态管理', link: '/nuxt/composables' },
              { text: '自定义配置', link: '/nuxt/config' },
              { text: '插件', link: '/nuxt/plugins' },
              { text: '服务端', link: '/nuxt/server' },
            ]
           },
          { text: 'Vue', link: '/item-b' }
        ]
      },
      // {
      //   text: '后端',
      //   collapsible: true,
      //   items: [
      //     { text: 'Rust', link: '/item-c' },
      //     { text: '数据库', link: '/item-d' }
      //   ]
      // }
    ],

  }
})
