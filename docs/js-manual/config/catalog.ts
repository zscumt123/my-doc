import {DefaultTheme} from 'vitepress/theme'
type SidebarItem = DefaultTheme.SidebarItem

const catalog: SidebarItem = {
  text: 'js手写系列',
  link: '/js-manual/',
  collapsed: true,
  items: [
    { text: '中间件', link: 'middleware' }
  ]
}
