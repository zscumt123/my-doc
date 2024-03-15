# webpack中所有的钩子函数

## Compiler上的钩子函数

###  compile 
`SyncHook`

beforeCompile 之后立即调用，但在一个新的 compilation 创建之前。这个钩子 不会 被复制到子编译器。

::: tip
`ExternalsPlugin`注册了该钩子函数
:::

### thisCompilation
`SyncHook`

初始化 compilation 时调用，在触发 compilation 事件之前调用。这个钩子 不会 被复制到子编译器。
回调参数：compilation, compilationParams

:::tip
`EnvironmentPlugin`
`FlagEntryExportAsUsedPlugin`
`WarnDeprecatedOptionPlugin`
`WarnNoModeSetPlugin`
`ResolverCachePlugin`
`ContainerPlugin`
`WorkerPlugin`
`ModuleChunkFormatPlugin`
`ModuleChunkLoadingPlugin`
`LazyCompilationPlugin`
`SyncModuleIdsPlugin`
`ArrayPushCallbackChunkFormatPlugin`
`CommonJsChunkFormatPlugin`
`AbstractLibraryPlugin ??`
`CommonJsChunkLoadingPlugin`
`ReadFileCompileAsyncWasmPlugin`
`ReadFileCompileWasmPlugin`
`AggressiveMergingPlugin`
`AggressiveSplittingPlugin`
`RuntimeChunkPlugin`
`SplitChunksPlugin`
`StartupChunkDependenciesPlugin`
`ConsumeSharedPlugin`
`FetchCompileAsyncWasmPlugin`
`FetchCompileWasmPlugin`
`JsonpChunkLoadingPlugin`
`ImportScriptsChunkLoadingPlugin`

:::



`


asyncChunks:
undefined
baseUri:
undefined
chunkLoading:
undefined
dependOn:
(1) ['u']
filename:
undefined
layer:
undefined
library:
undefined
name:
'a'
publicPath:
undefined
runtime:
undefined
wasmLoading:
undefined


`
