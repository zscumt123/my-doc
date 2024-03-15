# 创建编译参数
compile函数刚开始先创建了编译参数
``` js
const params = this.newCompilationParams();
```
`newCompilationParams`的实现
``` js
newCompilationParams() {
  const params = {
    normalModuleFactory: this.createNormalModuleFactory(),
    contextModuleFactory: this.createContextModuleFactory()
  };
  return params;
}
```
`createNormalModuleFactory`的实现，创建了一个`NormalModuleFactory`的实例，
然后执行了`normalModuleFactory`钩子函数

```js {12}
createNormalModuleFactory() {
  this._cleanupLastNormalModuleFactory();
  const normalModuleFactory = new NormalModuleFactory({
    context: this.options.context,
    fs: this.inputFileSystem,
    resolverFactory: this.resolverFactory,
    options: this.options.module,
    associatedObjectForCache: this.root,
    layers: this.options.experiments.layers
  });
  this._lastNormalModuleFactory = normalModuleFactory;
  this.hooks.normalModuleFactory.call(normalModuleFactory);
  return normalModuleFactory;
}
```
::: tip 
IgnorePlugin和NormalModuleReplacementPlugin 注册了normalModuleFactory钩子函数
:::

`createContextModuleFactory方法同理，先创建一个ContextModuleFactory，然后调用钩子函数`
``` js
createContextModuleFactory() {
  const contextModuleFactory = new ContextModuleFactory(this.resolverFactory);
  this.hooks.contextModuleFactory.call(contextModuleFactory);
  return contextModuleFactory;
}
```
