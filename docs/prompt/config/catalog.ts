import {DefaultTheme} from 'vitepress/theme'
type SidebarItem = DefaultTheme.SidebarItem

const catalog: SidebarItem = {
  text: '提示工程',
  link: '/prompt/',
  collapsed: true,
  items: [
    { text: '常用提示词', link: '/prompt/prompt-words' }
  ]
}


export {catalog}
