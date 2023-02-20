## 节流(throttle)定义
节流指函数在一定`间隔内`(比如3s)只执行一次，在这3s内无视后来产生的函数调用，也不会延长时间间隔，3s间隔结束后第一次遇到的新的函数调用会触发，然后在这新的 3 秒内依旧无视后来产生的函数调用请求，以此类推
::: tip 例子
假设水龙头的水是3秒一滴， 此时`管道中的水`就是我们频繁操作事件而不断涌入的回调任务，它需要接受`水龙头`的安排，`水龙头`就是节流阀，能控制流速，过滤无效的回调任务，滴水这个过程就是执行回调函数，每3秒一次， `3秒`就是间隔时间
:::
## 原理以及实现
- 用时间戳来判断是否已经到了执行时间，记录上次执行的时间戳，然后每次触发事件执行回调
 回调中判断当前时间距离上次执行时间间隔是否已经达到时间差，如果是则执行，并更新上次执行的时间

 ```ts:line-numbers 
type Fn = (...args: any[]) => any

 function throttle(fn: Fn, wait: number) {
  let lastExecTime = 0
  return function(...args: any[]) {
    const now = Date.now()
    //对比当前时间和上一次执行时间
    if(now - lastExecTime >= wait) {
      lastExecTime = now
      fn.apply(this,args)
    }
  }
 }
 ```
 - 定时器实现
 ```ts:line-numbers
function throttle2(fn: Fn, wait: number) {
  let timer: number | null = null;
  return function (...args: any[]) {
      if (!timer) {
          timer = setTimeout(() => {
              timer = null;
              fn.apply(this, args)
          }, wait)   
      }
  }
}
 ```

## 最终实现
* 第一种实现方式采用时间戳的方式，事件如果停止触发后，无法响应最后一次回调
* 第二种实现方式采用定时器， 定时器延时执行，所以事件停止后必然会触发回调，

`应该通过配置来决定是否响应事件开始时候和事件结束的回调,所以应该将两种方式结合起来`

```ts:line-numbers
type Fn = (...args: any[]) => any
interface Options {
  leading?: boolean, //leading代表是否响应开始回调
  trailing?: boolean // 是否响应结束回调
}

function throttle3(this:any,fn: Fn, wait: number, options: Options) {
  let timer: number | null
  let lastExecTime = 0
  const context = this
  const { leading, trailing } = options
  let result: any

  function execute(...args: any[]) {
    timer = null
    const now = Date.now()
    //重置
    lastExecTime = leading ? now : 0
    result = fn.apply(context, args)
  }
  function throttled(...args: any[]) {
    const now = Date.now()
    //初始的时候是否执行
    if(!lastExecTime && !leading) {
      lastExecTime = now
    }

    const remain = wait - (now - lastExecTime)
    //首次
    if(remain <= 0) {
      if(timer) {
        clearTimeout(timer)
        timer = null
      }
      lastExecTime = now
      result = fn.apply(context, args)
    } else if(!timer || trailing) {

      timer = setTimeout(() => execute(...args),remain)
    }
    return result
  }
  return throttled

}
```
