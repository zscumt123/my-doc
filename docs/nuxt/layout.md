## 布局
> 抽取项目中公共的ui， 放置到layouts目录下，支持自动导入

### 默认的layout
```html
<!-- layouts/default.vue -->
<template>
  <div>
    <header>顶部</header>
    <slot></slot>
    <footer>底部</footer>
  </div>
</template>

```
```vue
<template>
  <NuxtLayout>
    some page content
  </NuxtLayout>
</template>

```
### 自定义的layout
```
  |-- layouts      
        |-- default.vue
        |-- custom.vue    
```
```vue
<template>
  <NuxtLayout name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

```
