import {DefaultTheme} from 'vitepress/theme'
type SidebarItem = DefaultTheme.SidebarItem

export const catalog: SidebarItem = {
  text: 'webpack构建工具',
  link: '/webpack/',
  collapsed: true,
  items: [
    { text: 'CLI工具', link: '/webpack/cli' },
    { text: '源码解析一', link: '/webpack/code1' },
    { text: '源码解析二', link: '/webpack/code2' },
    { text: '源码解析三', link: '/webpack/code3' },
    { text: '钩子函数', link: '/webpack/hooks' }
  ]
}
