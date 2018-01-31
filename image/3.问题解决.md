# 在这里主要是按照自己想的来讲解问题。说的不好的地方请见谅。 或者加我QQ:2243863884修改问题

![tool-editor](https://github.com/liu33286821/InterviewQuestions/blob/master/image/javascript-this.png)

在上面这个例子中，发现```obj.fn```是一个立即执行函数，那么他就代表这个函数一开始初始化的时候就执行完毕。并且在例子中，声明了```var fn = obj.fn```然后又去执行了**fn()**，那么**this**的指针指向的是window，而在IIFE函数末尾的参数指向了全局变量num，此时形参num为20，我们又注意到```this.num```，我们在前面说了，this的指针指向window,那么也就代表与this.num 也等于20，
而在这个例子中我又发现另外一个问题。 变量声明提升的问题，在我原来的映像中，应该有变量提升这个问题啊，而我在```IIFE函数```的内部头部写了一个```console.log(num)```，在我之前的想法，应该是```undefined```而却打印出```20```。


## 关于变量声明提升

在上面就说了，在IIFE函数第一句执行console的时候，打印出20，而下面同时声明了一个和形参一个的变量名。那么会打印什么呢？

```javascript
    function f2(a) {
      console.log(a)
      var a = 1
      console.log(a === arguments[0])
    }
    f2(2)  //会发现此时最后一句打印的为true
```
在JS执行的时候会带相对变量宣告进行归纳处理，以最近的变量指定作为变量在执行时的值。所以变量宣告```var a```被合并(归纳掉),所以最后一句打印为true。

我们在去看图片中的例子：

    > 在开头打印num    num : 20  this.num = 20

    > num += 15      num指向了20    所以在这句话后面打印console是35
    
    > var num = 45    num又重新赋值了。此时的我们调用的num是在其内部的，全局的num无作用了。 所以在这句话后面打印 console 是40
    
    > 最后在return函数中， num += 20  所以这里num = 65
    
    >最后fn() 打印出来的是65
    
    > 而后面有打印了obj.fn()  在上面我们已经说了 自执行函数的this指针指向window 所以这里开头我们还会打印 num : 20 this.num: 20 但是运行的时候他已经是执行完毕的了。所以在这里是直接运行 return 函数内部的。
    
```javascript
    //obj.fn() 执行下面这个操作，因为我们调用的时候，自执行函数已经执行完了，所以才会执行下面这个操作
    return function () {
      this.num *= 4
      num += 20
    }
```
    > 我们在上面已经运行过一次fn()了。 此时的num赋值成了65， 然后我们在上面的代码中又去进行调用。 这里就涉及到闭包的问题。如果当前内部没有num，我们就会去上一级去查找num，此时obj的上一级是window.num  此时的num在fn()之后返回65，  65+=20  //所以最后打印了85
    
    > 在最后一句话中 我们又打印了window.num 和obj.num    obj.num在上面返回操作this.num *=4  所以返回的结果是120
    
    > window.num  此时我们在其fn()的时候 里面写了 this.num *=3    20*3= 60, 然后我们又在return再次进行调用 this.num*=4  此时 60*=4   最后返回结果240.
    