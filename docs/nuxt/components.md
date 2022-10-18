## 组件
> **components 文件夹用来放置项目中的组件,无需引入，可自动导入**
### 基本使用
```
|-- components 
    |-- TheHeader.vue
    |-- ComponentA.vue
    |-- ComponentB.vue
```
``` vue
<template>
  <div>
    <TheHeader />
    <ComponentA />
    <ComponentB/>
  </div>
</template>

```
### 多层级
```
|-- components 
    |-- base
        |-- foo
            |-- Button.vue
```
```vue
<template>
  <div>
    <BaseFooButton/>
  </div>
</template>
```
### 懒加载
> 按需加载，打包时候会单独生成一个bundle
```
|-- components 
    |-- LazyTheFooter.vue
```
### 直接引入组件
```js
  import { TheFooter } from '#components'
```

### 区分端的组件渲染
 #### 客户端
```
|-- components 
    |-- Comments.client.vue
```
```vue
<template>
  <div>
    <!-- 这个组件只会在客户端渲染 -->
    <Comments />
  </div>
</template>

```
> 对一个普通组件用`<ClientOnly/>`组件包装，也可以实现只在客户端渲染
```vue
<template>
  <div>
    <ClientOnly>
        <Comments />
    </ClientOnly>
  
  </div>
</template>
```
 #### 服务端

```
|-- components 
    |-- Comments.server.vue
```
```vue
<template>
  <div>
    <!-- 这个组件只会在服务端渲染 -->
    <Comments />
  </div>
</template>

```
