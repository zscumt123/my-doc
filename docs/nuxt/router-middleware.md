## 路由中间件
> 类似vue-router的导航守卫
::: tip
  路由中间件是vue应用的一部分，但不同于服务端的 server middleware
:::
 ### 匿名的路由中间件
 > 直接定义到page中
 ```js
definePageMeta({
    middleware: (to,from) => {
      console.log('nnnn')
    }
})
 ```
 ### 命名路由中间件
 ```js
  //index.vue
  definePageMeta({
    middleware: 'auth'
})
 ```
 > 定义middleware/auth.ts
 ```js
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    return abortNavigation()
  }
  return navigateTo('/')
})
 ```
 ### 全局的路由中间件
 > 定义middlewared/log.global.ts
 ```js
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('from: ' from.fullPath)  
  console.log('to: ', to.fullPath)
})
 ```
## 守卫导航
> 跳转页面和阻止导航跳转
::: warning
  不像vue-router中使用的next方法，所以中间件的方法只有两个参数,`to`和`from`
:::
 **`1. navigateTo`**
 > `return navigateTo('/')` 代表跳转到其他路由,如果跳转发生在服务端，会返回`302`状态码

 **`2. abortNavigation`**
 > `return abortNavigation()` 将会停止当前的导航 `return abortNavigation(error)`可自定义错误
