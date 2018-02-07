# JavaScript

### 1.JavaScript声明变量的6种方法？

> ES5中有两种变量声明的方法：```var```和```function```。ES6中添加了```let```和```const```命令还有```import```和```class```命令。

### 2.顶层对象的属性有哪些？

> 在浏览器环境指向的是```window```,Node中指向的是```global```,在ES5中顶层对象和全局变量是等价的，而在ES6中更改了这一点，为了保证兼容性```var```和```function```依旧是顶层对象属性，而```let```和```const```命令还有```class```命令不属于顶层对象属性。

### 3.请看下面的题目进行思考会打印什么？[解决问题](https://github.com/liu33286821/InterviewQuestions/blob/master/image/three.md)
![tool-editor](https://github.com/liu33286821/InterviewQuestions/blob/master/image/javascript-this.png)

### 4. 1,1,2,3,5,8,13,21,......  使用函数来进行获取第n个数

![tool-editor](https://github.com/liu33286821/InterviewQuestions/blob/master/image/fibonacci.png)

### 5.现在我们需要访问一个对象。 不过对象的嵌套比较深，如果对象不存在，那么就报 ```undefined```？[解决问题](https://github.com/liu33286821/InterviewQuestions/blob/master/html/five.html)

```javascript
    const data = {a: {b: {c: '深层次'}}}
    ObjGet(data, 'a.b.c') //深层次
    ObjGet(data, 'a.b.c.d') //undefined
```

### 6. 根据数组里面的对象属性进行升降排序 

```javascript
    //让下面数组可以从大到小排序。 也可以从小到大排序。
    var arr = [
        {
            price: 55,
            title: '价格55'
        },
        {
            price: 11,
            title: '价格11'
        },
        {
            price: 99,
            title: '价格99'
        }
    ]
    arr.sort(function(a,b) {
      return b.price - a.price  //从大到小排序。
    })
    console.log(arr)
```

### 7. 内存泄露问题。
    
    1. 闭包内部使用全局变量。    [原因： 不会被垃圾机制所回收]    高程三有部分讲解
    
    2. dom事件问题。            [原因： 有些dom事件我们只会点击一次，如果后续不去卸载这个事件，它会一直留在内存中。] 
    
    3. 计时器                   [原因： 调用计时器的时候，没有关闭定时器。]
    

### 8. JS原型？

    在JS中，JS是通过原型(prototype)来实现继承的，这个属性是一个对象。
    如果我们去查找一个方法上面的原型的时候，如果我们没有自己手写这个方法。
    那么他就会去上一层的prototype下面查找有没有这个方法。 如果有的话，那么就停止查找。 使用当前的这个方法。
    如果没有的话。 会直至找到他的最顶层的方法。

### 9. 模块化

    这个主要在于ES6之前JS没有标准的模块化概念。原来看到过有CMD和AMD两种规范。 具体没有太大的考察过。 在公司都是一个前端。
    
> AMD -> 依赖需要开始就写好。

> CMD -> 依赖就近， 什么时候用，什么时候载入。


### 10.事件代理。

    事件代理主要是因为子元素过多，例如瀑布流，如果我们将大量的事件全部绑在子元素上面的，那么事件绑定的元素过多。
    同时动态的的DOM结构仍然可以进行监听。 事件代理主要发生在冒泡阶段。
    
### 11.事件流
    
    第10个问题之后问的问题。
    
>  1.事件捕获

>  2.处于目标期间

>  3.时间冒泡阶段。  防止冒泡： stopPropagation() || e.cancelBublle= true 

    在这里如果我们有一个不需要进行事件代理，只需要它自己一个单独的事件，我们可以考虑使用阻止冒泡。 因为上面也说了，事件代理主要发生在冒泡阶段。