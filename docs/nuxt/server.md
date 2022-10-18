## server
> server文件夹，包括请求api，routes，middleware，plugins

```
|-- server      
    |-- api
    |-- routes
    |-- middleware     
    |-- plugins
```
### 数据请求
```
|-- server      
    |-- api
        |-- count.ts
```
```js
//定义一个接口
export default defineEventHandler((event) => {
  return {
    count: 1
  }
})

```
```html
<script setup>
const { data: count } = await useFetch('/api/count')
</script>
<template>
  Page visits: {{ count }}
</template>
```
### 参数请求
```
    |-- api
        |-- user
            |-- [id].ts
```
```js
//定义一个接口
export default defineEventHandler((event) => {
  const id = event.context.params.id
  return {
    id
  }
})

```
### 匹配请求方法
``` js
//只能使用get方法请求
|-- server      
    |-- api
        |-- count.get.ts
```

### 不需要`api`前缀
```
|-- server      
    |-- routes
        |-- count.ts
```
```js
  const { data: count } = await useFetch('/count')
```
### server端中间件
```
|-- server      
    |-- middleware
        |-- log.ts
```
```js
export default defineEventHandler((event) => {
  console.log('New request: ' + event.req.url)
})

```
<!-- ### server插件
> nuxt 的server引擎使用的是Nitro
 -->
