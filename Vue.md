# Vue面试题。

### 1. 请说一下你对Vue的理解。

> 1. Vue严格来说是一个MVVM框架。

> 2. vue主要通过组件化来进行使用，不必担心布局更改和类名重复导致JS重写，因为他是靠数据驱动双向绑定。
底层是Object.defineProperty()定义数据set,get函数原理实现。

> 3.单页面应用，比较适合移动端。局部刷新内部组件，用户体验更好。

> 4.代码可读问题。 比较更适合团队协作开发。


### 2. 那什么是MVVM模式框架。

> 1. M 就是模型层，存的一个数据对象

> 2. V 就是视图层，所有的html节点都在这一层

> 3. VM 就是视图模型层，通过data属性连接Model模型层， 在通过el属性连接View视图层。


### 3. 你在vue都是通过什么来请求后台资源？

>  axios

### 4. axios怎么使用？ 你怎么使用它来实现登录？

>  


### 5. vuex你用过么？ 怎么使用，那些场景使用它？

  根据文档来的话， 我们就会创建一个store文档。 其中会创建

>index.js  这里主要会引用vue vuex  mutations下面的所有方法。 actions下面的所有方法。 导入state, getters
 
>mutations.js  这里主要是放置一些更改vuex数据和状态的一些方法 因为在vue中，我们不可能直接进行更改vuex里面的数据。 需要借用此JS来进行更改。
 
>actions.js   如果我们需要更改多个mutations里面的一些方法，那么就使用actions。 但是也不能过度浪费。同时也可以在一些组件无关联的时候利用此方法来进行使用
 
>mutation-types.js  mutations和actions的桥梁。   当然也可以直接更改。  但是这样更清晰。

>getters.js  //在我们页面想要获取vuex里面的数据的时候。   可以从这里引出

>state.js   //存放公共数据和状态。

原来仿做过[QQ音乐](https://github.com/liu33286821/qq),在这里考虑QQ音乐播放 以及加载状态的时候使用了vuex。


### 6.  Vue的生命周期有哪些？

在面试的时候就说了几个常用的。同时让我讲解了区别。
```javascript
    beforeCreate()
    created()
    beforeMount()
    mounted()
    beforeUpdate()
    updated()
    activated()
    deactivated()
    beforeDestroy()
    destroyed()
    errorCaptured()
```

> created 实例创建完成之后调用。可以在ajax数据过来的时候在此处调用。不过对于```$refs```的属性不可见。

> mounted 在这里会进行 $el替换。 不过在这里我去制作这个[QQ音乐](https://github.com/liu33286821/qq)的时候发现如果有v-if语句的时候。那么不会被探测到。只有在updated的时候探测到了。

> beforeUpdate  在这里考虑如果我们需要更新某个组件之前进行调用。 如果需要更新的东西，符合预期的效果才会进行updated生命周期

> updated  页面需要重新渲染某部分的时候，会进入这里。但是他不会让所有的子组件一起重绘。

> destroyed  实例销毁的时候调用。在此调用所有的时间坚挺会被移除，子实例也会被销毁。 如果我们需要退出一个页面的时候，需要删除或暂停某些东西的话，那么考虑在次使用。


### 7.你在上面提过的$refs主要是做什么？

$refs其实就是获取当前我们需要获取的这个标签的所有东西。 包括了下面的子孙标签。

### 8.Vue下面的data属性你了解过怎么实现的么？

vue是采用数据劫持结合发布者-订阅者模式的方式。通过Object.defineProperty()来劫持各个属性的setter，getter在数据发生变动时发布消息给订阅者，触发相应的监听回调。

这题当时说说了一些简单的原理。发现面试官有些不满意。。。。。 后续在去找找答案。。。




 
