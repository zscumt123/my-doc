import {DefaultTheme} from 'vitepress/theme'
type SidebarItem = DefaultTheme.SidebarItem

const catalog: SidebarItem = {
  text: 'http2',
  link: '/http2/',
  collapsed: true,
  items: [
    { text: 'http1的问题', link: '/http2/http1-question' }
  ]
}


export {catalog}
