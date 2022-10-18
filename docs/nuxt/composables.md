## 组合式
> composables 文件夹放置vue的组合式逻辑，可自动导入
```js
//composables/useFoo.ts
export const useFoo = () => {
  return useState('foo', () => 'bar')
}

```
```vue
<template>
  <div>
    {{ foo }}
  </div>
</template>

<script setup>
const foo = useFoo()
</script>

```
## 状态管理
 ### 客户端状态管理
 ```js
 // store.js
import { reactive } from 'vue'

export const store = reactive({
  count: 0
})

 ```
 ```html
 <template>{{store.count}}</template>
 <script setup>
  import { store } from './store.js'
 <script/>
 ```

 ### 跨请求状态污染
> 应用中整个生命周期中只定义一个响应式对象。这在纯客户端的 Vue 应用中是可以的，因为对于浏览器的每一个页面访问，应用模块都会重新初始化。
然而，在 SSR 环境下，应用模块通常只在服务器启动时初始化一次。同一个应用模块会在多个服务器请求之间被复用，而我们的单例状态对象也一样。如果我们用单个用户特定的数据对共享的单例状态进行修改，那么这个状态可能会意外地泄露给另一个用户的请求。我们把这种情况称为跨请求状态污染。

 ```js
 // store.js
import { reactive } from 'vue'

export const createStore = () => reactive({
  count: 0
})

 ```
 ### nuxt中的方案
 > 提供了对于ssr友好，不会造成跨请求污染的函数 `useState`
```js
const counter = useState('counter', () => 1)
```

