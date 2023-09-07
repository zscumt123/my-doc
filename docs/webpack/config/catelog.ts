import {DefaultTheme} from 'vitepress/theme'
type SidebarItem = DefaultTheme.SidebarItem

export const catalog: SidebarItem = {
  text: 'webpack构建工具',
  link: '/webpack/',
  collapsed: true,
  items: [
    { text: 'CLI工具', link: '/webpack/cli' }
  ]
}
