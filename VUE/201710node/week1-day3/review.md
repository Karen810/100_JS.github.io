## vue第二天复习
- v-model（如果checkbox，select多选是数组，提供一个value属性）（radio checkbox分组靠的是v-model）， checked selected不存在
- 修饰符  .number .lazy
- 按键修饰符  .enter .ctrl  .keyCode
- 事件 
    - @事件.stop="事件名"   //阻止冒泡
    ```html
        stopPropagation，cancelBubble=true;
    ```
    
    - @事件.capture="事件名"   //捕获
        ```html
            xxx.addEventListener('click',fn)
        ```
        
    - @事件.prevent="事件名"   //阻止默认行为,比如a标签的跳转行为
        ```html
            preventDefault,returnValue=false
        ```
    - @事件.once="事件名"   //只执行一次
        ```html
            on('click') off('click')  
        ```
    - @事件.self="事件名"   //只有点击自己的时候触发
    
- jquery once    
- e.srcElement&&e.target  判断事件源绑定事件

## filters 实例上可以用
```html
    {{'123' | myFilter(param1,param2,param3)}}
    filters:{
        myFilter(param1,param2,param3){
        
        }
    }
```

## computed计算“属性” 不是方法
- 方法不会有缓存，computed会根据依赖的（归vue管理的数据，可以响应式变化的：this.xxx）属性进行缓存
- 两部分组成：get和set（不能只写set，可以只写get）  一般情况下，通过js赋值影响其他人或者表单怨妇设置值的时候会调用set方法

## v-if/if-show
- v-if操作的是dom  v-if可以和v-else-if，v-else连用
- v-show操作的是样式

## v-bind简写：
- 动态绑定“属性”
```html
<img :src="src" :width="w"/> 
```

## 实现单页开发的方式
- 通过hash记录跳转的路径（可以产生历史管理）
- 浏览器自带的历史管理的方法 history.go()
history.pushState()可能会导致404

> 开发时使用hash的方式，上线的话我们会只用history的方式











