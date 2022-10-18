## 目录结构

``` js
|-- zs_work
    |-- .nuxt             //开发时生成的vue应用
    |-- .output           //打包后的文件
    |-- app.config.ts     //运行时配置
    |-- app.vue           //入口文件
    |-- nuxt.config.ts    //nuxt配置文件
    |-- package.json
    |-- tsconfig.json
    |-- assets            //资源(会被打包工具处理)
    |-- public            //公共资源，不会被打包工具处理
    |-- components        //组件
    |-- composables       // useXXX
    |-- layouts           //布局
    |-- middleware        //路由中间件
    |-- pages             //页面
    |-- plugins           //插件
    |-- server      
        |-- api
        |-- routes
        |-- middleware     
        |-- plugins
```
## 别名
```js
{
  "~~": "/<rootDir>",
  "@@": "/<rootDir>",
  "~": "/<rootDir>",
  "@": "/<rootDir>",
  "assets": "/<rootDir>/assets",
  "public": "/<rootDir>/public"
}
```
