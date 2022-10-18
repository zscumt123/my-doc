## 自定义配置
### app config
> 暴露出的一个reactive对象，可以在运行时，声明周期和插件中更新，在app.config.ts中配置

```js
export default defineAppConfig({
  foo: 'bar',
  theme: {
    primaryColor: '#ababab'
  }
})

```
```js
const appConfig = useAppConfig()

console.log(appConfig.theme)
updateAppConfig({
  foo: 'abc'
})

```

### nuxt config
> nuxt 项目配置
```js
export default defineNuxtConfig({
})
```

### 定义head头部

1. nuxt config中配置
```js
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1', 
      title: 'My App',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  }
})
```
2. 使用useHead
```html
<script setup lang="ts">
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { children: 'console.log(\'Hello world\')' } ]
})
</script>

```
3. 使用组件
```vue
<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style type="text/css" children="body { background-color: green; }" />
    </Head>
    <h1>{{ title }}</h1>
  </div>
</template>
<script setup>
const title = ref('Hello World')
</script>

```
