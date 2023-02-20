import {DefaultTheme} from 'vitepress/theme'
type SidebarItem = DefaultTheme.SidebarItem

export const catalog: SidebarItem = {
  text: '正则表达式',
  link: '/regular-expression/',
  collapsed: true,
  items: [
    { text: '元字符', link: '/regular-expression/meta' },
    { text: '贪婪与非贪婪', link: '/regular-expression/greed' },
    { text: '断言', link: '/regular-expression/assert' },
    { text: '转义', link: '/regular-expression/escape' },
  ]
}
