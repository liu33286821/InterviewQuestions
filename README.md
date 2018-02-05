# 这里主要讲解碰见的面试题目

### 1.JavaScript声明变量的6种方法？

> ES5中有两种变量声明的方法：```var```和```function```。ES6中添加了```let```和```const```命令还有```import```和```class```命令。

### 2.顶层对象的属性有哪些？

> 在浏览器环境指向的是```window```,Node中指向的是```global```,在ES5中顶层对象和全局变量是等价的，而在ES6中更改了这一点，为了保证兼容性```var```和```function```依旧是顶层对象属性，而```let```和```const```命令还有```class```命令不属于顶层对象属性。

### 3.请看下面的题目进行思考会打印什么？[解决问题](https://github.com/liu33286821/InterviewQuestions/blob/master/image/3.%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3.md)
![tool-editor](https://github.com/liu33286821/InterviewQuestions/blob/master/image/javascript-this.png)

### 4. 1,1,2,3,5,8,13,21,......  使用函数来进行获取第n个数

![tool-editor](https://github.com/liu33286821/InterviewQuestions/blob/master/image/fibonacci.png)

### 5.现在我们需要访问一个对象。 不过对象的嵌套比较深，如果对象不存在，那么就报 ```undefined```

```javascript
    const data = {a: {b: {c: '深层次'}}}
    ObjGet(data, 'a.b.c') //深层次
    ObjGet(data, 'a.b.c.d') //undefined
```

### 6. 根据数组里面的对象属性进行升降排序 

```javascript
    //让下面数组可以从大到小排序。 也可以从小到大排序
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
```


