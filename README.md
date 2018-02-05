# 这里主要讲解碰见的面试题目

### 1.JavaScript声明变量的6种方法？

> ES5中有两种变量声明的方法：```var```和```function```。ES6中添加了```let```和```const```命令还有```import```和```class```命令。

### 2.顶层对象的属性有哪些？

> 在浏览器环境指向的是```window```,Node中指向的是```global```,在ES5中顶层对象和全局变量是等价的，而在ES6中更改了这一点，为了保证兼容性```var```和```function```依旧是顶层对象属性，而```let```和```const```命令还有```class```命令不属于顶层对象属性。

### 3.请看下面的题目进行思考会打印什么？[解决问题](https://github.com/liu33286821/InterviewQuestions/blob/master/image/3.%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3.md)
![tool-editor](https://github.com/liu33286821/InterviewQuestions/blob/master/image/javascript-this.png)

### 4. 1,1,2,3,5,8,13,21,......  使用函数来进行获取第n个数

> 此题目主要来源于 **语言精髓**这本书。

```javascript
    //规律  后一项是前两项的和
    const fibonacci  = ((memo = [0, 1]) => { //默认第一个
        const fib = (n) => { // 这里的参数n  指向了数组的索引
            let result = memo[n]  // 目前默认的数组里面只有 0 ，1 这两个索引。 如果大于这两个数的话，那么其值就是undefined
            if (typeof result !== 'nummber') { //然后在去进行判断其值是不是number
                result = fib(n - 1) + fib(n - 2)//在下面调用函数的时候，我们判断其前面的索引和在前面的一个索引是否有值 重新调用此函数。
                memo[n] = result  //然后其值 赋值上去。 其中 如果前面的值也为undefined 也一样会进行赋值。
            }
            return result  //最后return 出去  fib 就等于当前的值， 然后赋值给外层的函数。
        }
        return fib
    })()
    fibonacci(7)
```