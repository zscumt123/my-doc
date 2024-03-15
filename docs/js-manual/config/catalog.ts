import {DefaultTheme} from 'vitepress/theme'
type SidebarItem = DefaultTheme.SidebarItem

export const catalog: SidebarItem = {
  text: 'js手写系列',
  link: '/js-manual/',
  collapsed: true,
  items: [
    { text: '中间件', link: '/js-manual/middleware' },
    {text: '节流', link: '/js-manual/throttle'},
    { text: '防抖',  link: '/js-manual/debounce'},
    {text: '最大并发', link: '/js-manual/asyncPool'},
  ]
}
