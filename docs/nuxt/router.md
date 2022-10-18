## 入口文件

### 不带路由
```vue
<template>
  <h1>Hello World!</h1>
</template>

```
### 带路由
> 类似于根路由组件
```vue
<template>
  <div>
    <NuxtPage/>
  </div>
</template>
```
::: tip

`<NuxtPage>`相当于vue-router的`<router-view>`组件，但是不能作为根组件，因为内部使用了` <Suspense>`
:::

## 页面与路由系统
> **nuxt使用vue-router提供了基于`文件`的路由系统**
### 普通路由
``` html
<!-- pages/index.vue(路由 /) -->
<template>
  <h1>Index page</h1>
</template>

<!-- pages/about.vue(路由 /about) -->
<template>
  <h1>About page</h1>
</template>

```
::: warning
  pages目录下的页面，必须只能有一个根组件，类似于vue2中的规定
  ``` html
  <!-- good demo -->
<template>
  <div>
    <h1>About page</h1>
  </div>
</template>
<!-- bad -->
<template>
  <span>bad</span>
  <div>
    <h1>About page</h1>
  </div>
</template>
  ```
:::
### 动态路由
> vue-router 中 /user/:id

> nuxt中使用文件目录
```
|-- pages      
    |-- index.vue
    |-- about.vue
    |-- user
        |-- [id].vue
```
### 嵌套路由
```
|-- pages      
    |-- index.vue
    |-- about.vue
    |-- parent
        |-- child.vue
    |-- parent.vue
```
```vue
  <!-- parent.vue -->
  <template>
    <div>
      <NuxtPage/>
    </div>
  </template>
```
### 导航
 > 导航组件
```vue
<template>
  <NuxtLink to="/">Home page</NuxtLink>
</template>

```
> js跳转,nuxt提供了一个全局的`navigateTo`函数
```js
navigateTo({
  path: '/search',
  query: {
    name: 'a',
    type: 'b'
  }
})
```
### 自定义路由配置
> 1.router.options.ts 下自定义路由配置
```js
  // router.options.ts
  import type { RouterConfig } from '@nuxt/schema'
  export default <RouterConfig> {
    routes: (_routes) => [
      {
        name: 'home',
        path: '/',
        component: () => import('~/pages/home.vue')
      }
    ],
  }

```
> 2. Nuxt config中配置
```js 
// nuxt.config.ts
export default defineNuxtConfig({
  router: {
    options: {},
    base: ''
  }
})
```
### 路由元数据
> 附加给路由的信息，和vue-router的meta一样
```js
//definePageMeta 类似于defineProps，编译器宏
definePageMeta({
  title: 'home',
  auth: false
})
```
