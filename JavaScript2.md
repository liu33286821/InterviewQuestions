1. JS数据类型？

基本数据类型： Null、 Undefined、 Number、 String、 Boolean、 Symbol

引用数据类型： Array、 Object、 Function


2. JS组成部分？

    DOM  BOM   ECMAScript

3. 检测浏览器版本？

    navigator.userAgent

4. JS基本规范？

    变量的大小写，构造函数声明的大小写、变量和函数使用前提前声明、语句结束使用分号

5. 如何编写高性能JS？

    严格模式的使用、全局变量在闭包内部使用的时候使用局部变量来替代全局变量、减少DOM操作、减少对象成员的嵌套、最小化重绘和回流。

6. 浏览器渲染的过程？ DOM树和渲染树的区别？

    浏览器渲染：
    
        首先浏览器根据HTML来进行构建DOM树，并且请求js，css,image资源文件。
        
        在CSS载入成功后，进行构建CSSOM（树）
        
        CSSOM构建结束后，和DOM一起生成渲染树
        
        最后进行布局和显示。
    
    DOM树和渲染树的区别：
        
        DOM树针对HTML的节点。
        
        渲染树只是渲染页面。 但是不会所有的东西都去进行渲染显示。 像head内部的标签和隐藏的属性都不会去进行显示。
        

7. 重绘和回流？

    重绘： 页面进行更新元素外观不影响布局的情况下，产生重绘。
    
    回流： 页面进行元素的布局（位置，大小，状态）发生改变的时候


8. 如何最小化重绘和回流？

    需要对元素进行操作的时候可以先隐藏，在完成之后进行显示。
    
    需要创建多个DOM节点，可以使用DocumentFragment创建完成后一次性加入document里面
    
    缓存Layout属性。  多次使用只会产生一次回流值。
    

9. 作用域和变量声明提升。

    作用域：

        JS在for和if语句原本没有作用域，在ES6出来之后出现了let之后出现了这两者的作用域。
    
        在ES6之前只有函数作用域。
        
    变量声明提升：
    
        函数声明和变量声明会隐式的把其提到当前作用域最顶部。且函数声明优先高于变量声明。
    

10. 介绍JS原型， 原型链， 有什么特点？

    原型：
        
        JS对象包含了一个proto属性。 这个属性对应的就是当前对象原型。
        JS函数除了proto，还有一个prototype属性。
        
        当函数对象作为构造函数创建实例的时候，当前的prototype将作为实例对象返回给引用这个构造函数的变量的原型proto
    
    原型链：
        
        在JS中，我们去调用当前对象的某个属性的时候，会去查找当前对象有没有这个属性，如果有就停止查找，没有的话会去这个对象的上一层查找。
        
    原型特点： 
    
        JS对象是通过引用来进行传递的，当修改原型的时候，与之相关的对象也会继承这一改变。
    

11. JS有几种类型的值？

    栈和堆。  栈值包括基本数据类型。  堆值是引用数据类型。  【具体可查看高程3】

12. JS如何实现一个类, 怎么实例化这个类？

```javascript
    class P {
        constructor (x = 0, y = 0){
            this.x = x
            this.y = y
        }
        Add () {
            return this.x + this.y
        }
    }
    class Color extends P {
        constructor (x, y, color) {
            super(x, y)
            this.color = color
        }
        Add () {
            return this.x * 2 + this.y
        }
        Add2 () {
            return super.Add()
        }
        Background () {
            return `当前颜色：${this.color},调用本身的Add${this.Add()},调用父级的Add${this.Add2()}`
        }
    }
    var p2 = new Color(1,3,'red')
    console.log(p2.Add())
    console.log(p2.Background())
    console.log(p2.Add2())
```

13. JS作用域链？

    作用域链主要在于闭包，会在当前内部去查找需要的变量和属性。直至查找到全局。

14. this的理解？

    this总是指向函数调用者
   
    如果有new关键字，指向new出来的实例对象。
    
    JS事件中，this指向实例的这个对象。

15. WINDOW对象和DOCUMENT对象。

    WINDOW:   指向的当前浏览器窗口。 是JS顶级对象。 WINDOW对象属性和方法。在全局范围都有效
    
    DOCUMENT: HTML文档节点。 可以进行对页面节点元素的访问。 它也是window对象的一部分。

16. DOM事件处理方式的区别？

    DOM0:  btn.onclick=func;   btn.onclick = null
    
    DOM2: 
            
            btn.addEventListener('click',func,false)
            
            btn.removeEventListener('click',func,false)
    
    DOM3: 
            document.addEventListener(input, 'textInput',func)
            

17. 事件的三个阶段？

    捕获 ->  目标 -> 冒泡

18. 在一个DOM上绑定两个点击事件，一个捕获，一个冒泡。会执行几次？ 先执行冒泡还是捕获？

    如果被触发。 会执行两次。
    
    如果DOM是目标元素。 则按事件绑定顺序执行， 不区别冒泡和捕获
    
    如果DOM处于事件流而非目标元素， 先执行捕获么，后执行冒泡。
    

19. 事件委托？

```javascript
    var Ul = document.getElementById('ul')
    Ul.addEventListener('click',function(e) {
      var target = e.target || event.srcElement
      if(!!target && target.nodeName.toUpperCase() === 'Li') {
          console.log(target.innerHTML)
      }
    },false)
```

20. new操作符做了什么？

    创建一个实例对象，改变了this指针，同时继承了对象的原型。

21.创建对象的方式？

    对象字面量，Object.create()，构造函数，原型， 构造+原型，工厂模式

22. 写一个通用的事件侦听函数？

```javascript
    Util = {
        readEvent: function(fn) {
          if(fn == null ) fn = document
          var load = window.onload
          if(typeof  window.onload != 'function') {
              window.onload = fn
          } else {
              window.onload = function() {
                load()
                fn();
              }
          }
        },
        addEvent: function(ele,type,handler) {
          if(ele.addEventListener) {
              ele.addEventListener(type,handler,false)
          } else if(ele.attachEvent){
              ele.attachEvent('on'+type, function() {
                handler.call(ele)
              })
          } else {
              ele['on'+type] = handler
          }
        },
        removeEvent: function(ele,type,handler) {
          if(ele.removeEventListener) {
              ele.removeEventListener(type,handler)
          } else if(ele.detachEvent) {
              ele.detachEvent('on'+type, handler)
          }else {
              ele['on'+ type] = null
          }
        },
        stopPropagation: function(e) {
          if(e.stopPropagation) {
              e.stopPropagation()
          } else {
              e.cancelBubble = true
          }
        },
        preventDefault: function(e) {
          if(e.preventDefault) {
              e.preventDefault()
          } else {
              e.returnValue = false
          }
        },
        getEvent: function(e) {
          return e.target || e.srcElement
        }
    }
```

23. Ajax是什么？ 如何创建一个Ajax？

    Ajax主要在于异步传输，向服务器发送请求，不必等待结果，可以做一些其他的事情。

```javascript
    function ajax(url, type) {
        type = type || 'GET'
      var xmlHttp;
      if(window.XMLHttpRequest) {
          xmlHttp = new XMLHttpRequest()
      } else {
          xmlHttp = new ActiveXObject()
      }
      xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            console.log('更改东西')
        } else {
            console.log('失败')
        }
      }
      xmlHttp.open(type,url)
      xmlHttp.send()
    }

```

24. DOM操作 添加、删除、移动、复制、创建和查找节点

    创建新节点：
    
        createDocumentFragment
        
        createElement
        
        createTextNode
    
    添加、删除、替换、插入：
        
        appendChild
        
        removeChild
        
        replaceChild
        
        insertBefore
    
    
    查找：
    
        getElementByTagName()
        
        getElementsByName
        
        getElementById
 