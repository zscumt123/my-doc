import { defineConfig } from 'vitepress'
import { catalog as http2Catalog } from '../http2/config/catalog'
import { catalog as introductionCatalog } from '../introduction/config/catalog'
import {  catalog as manualCatalog} from '../js-manual/config/catalog'
import { catalog as RegularCatalog } from '../regular-expression/config/catelog'

import {DefaultTheme} from 'vitepress/theme'
type SideBar = DefaultTheme.Sidebar


const sidebar: SideBar = [
  introductionCatalog,
  { 
    text: 'Nuxtjs入门',
    link:'/nuxt/',
    collapsed: true,
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
  http2Catalog,
  manualCatalog,
  RegularCatalog
]

const nav: DefaultTheme.NavItem[] =  [
  {
    text: '文档目录',
    items: [
      {
        text: 'nuxt',
        link: '/nuxt/'
      }
    ]
  },
];

export default defineConfig({
  vite: {
    server: {
      port: 5555
    }
  },
  base: '/my-doc/',
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
    nav,
    sidebar,
  }
})
