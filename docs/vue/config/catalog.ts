import {DefaultTheme} from 'vitepress/theme'
type SidebarItem = DefaultTheme.SidebarItem

const catalog: SidebarItem = {
  text: 'vue',
  link: '/vue/',
  collapsed: true,
  items: [
    { text: 'vue中的diff算法', link: '/vue/diff' }
  ]
}


export {catalog}
