import{_ as t,o as a,c as e,Q as o}from"./chunks/framework.38a59c20.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"nuxt/index.md","filePath":"nuxt/index.md","lastUpdated":1694070681000}'),i={name:"nuxt/index.md"},l=o('<h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><h3 id="客户端渲染csr" tabindex="-1">客户端渲染csr <a class="header-anchor" href="#客户端渲染csr" aria-label="Permalink to &quot;客户端渲染csr&quot;">​</a></h3><blockquote><p>普通的vue单页应该，页面由js生成虚拟dom，再根据虚拟dom渲染出真实的页面，所有html的生成都是在浏览器端完成</p></blockquote><h3 id="服务端渲染ssr" tabindex="-1">服务端渲染ssr <a class="header-anchor" href="#服务端渲染ssr" aria-label="Permalink to &quot;服务端渲染ssr&quot;">​</a></h3><blockquote><p>node.js 服务器将基于 Vue 的组件渲染成 HTML 并传输到客户端，而不是纯 javascript。与传统的 Vue SPA 相比，使用 SSR 将带来巨大的 SEO 提升、更快的首屏加载、更好的用户体验。</p></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>截至目前，Google 和 Bing 可以很好地对同步 JavaScript 应用进行索引。这里的“同步”是关键词。如果你的应用以一个 loading 动画开始，然后通过 Ajax 获取内容，爬虫并不会等到内容加载完成再抓取。也就是说，如果 SEO 对你的页面至关重要，而你的内容又是异步获取的，那么 SSR 可能是必需的。</p></div><h3 id="静态站点生成ssg-static-site-generation" tabindex="-1">静态站点生成ssg(Static-Site Generation) <a class="header-anchor" href="#静态站点生成ssg-static-site-generation" aria-label="Permalink to &quot;静态站点生成ssg(Static-Site Generation)&quot;">​</a></h3><blockquote><p>也被称为预渲染，是另一种流行的构建快速网站的技术。如果用服务端渲染一个页面所需的数据对每个用户来说都是相同的，那么我们可以只渲染一次，提前在构建过程中完成，而不是每次请求进来都重新渲染页面。预渲染的页面生成后作为静态 HTML 文件被服务器托管。</p></blockquote><h3 id="注水-客户端激活-hydration" tabindex="-1">注水,客户端激活(Hydration) <a class="header-anchor" href="#注水-客户端激活-hydration" aria-label="Permalink to &quot;注水,客户端激活(Hydration)&quot;">​</a></h3><blockquote><p>服务器已经渲染好了HTML，无需将其丢弃再重新创建所有的 DOM 元素。然而，我们需要&quot;激活&quot;这些静态的 HTML，然后使他们成为动态的（能够响应后续的数据变化）</p></blockquote><h2 id="nuxt是什么" tabindex="-1">Nuxt是什么 <a class="header-anchor" href="#nuxt是什么" aria-label="Permalink to &quot;Nuxt是什么&quot;">​</a></h2><blockquote><p><strong>Nuxt是一个基于vue3的混合开发框架</strong></p></blockquote><ul><li>自动导入</li><li>文件系统路由和api层</li><li>数据请求工具函数</li><li>零配置typescript支持</li><li>可选的构建工具</li><li><code>可选的渲染方式(通用渲染和仅客户端渲染)</code></li><li>ssg支持</li><li>约定大于配置</li><li>...</li></ul>',13),s=[l];function r(n,c,d,u,h,p){return a(),e("div",null,s)}const q=t(i,[["render",r]]);export{b as __pageData,q as default};
