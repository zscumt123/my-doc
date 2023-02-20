## 防抖(debounce)的定义
`防抖`函数指的是某个函数在某段时间内，无论触发了多少次，都只执行最后一次
::: tip 例子
在乘坐公交车时，司机需要等待最后一个人进入再关门，每次新进一个人，司机就会将计时器清零并且
重新开始计时，重新等待1分钟再关门，如果后续一分钟内都没有乘客上车，司机就会关闭车门
:::
## 原理与实现
- 实现原理就是利用定时器，函数第一次执行设定一个定时器，之后在调用时发现已经设定过定时器，就清空之前的定时器，并设定一个新的定时器

```ts:line-numbers 
  //ts的简单实现
  type Fn = (...args: any[]) => any

  function debounce(fn: Fn, wait: number) {
    //闭包存储定时器
    let timer: number | null = null
    //wait 小于0 就取0
    let delay = Math.max(wait, 0)
    return function (...args: any[]) {
      //定时器存在就清楚
      if(timer) clearTimeout(timer)
      //重新开启定时器
      timer = setTimeout(() => {
        fn.apply(this,args)
      },delay)
    }
  }

  //使用
  const demoFn = debounce(() => console.log('执行了'), 1000)
  document.addEventListener('scroll', demoFn)
```
- 以上是一个基本的实现，但是无法实现第一次触发回调事件，所以需要加上第一次触发立即执行的功能

```ts:line-numbers{12-14}
type Fn = (...args: any[]) => any

function debounce(fn: Fn, wait: number, immediate = false) {
  //闭包存储定时器
  let timer: number | null = null
  //wait 小于0 就取0
  let delay = Math.max(wait, 0)
  return function (...args: any[]) {
    //定时器存在就清楚
    if(timer) clearTimeout(timer)
    //首次执行逻辑,此时定时器不存在
    if(immediate && !timer) {
      fn.apply(this,args)
    }
    //重新开启定时器
    timer = setTimeout(() => {
      fn.apply(this,args)
      time = null
    },delay)
  }
}
```

