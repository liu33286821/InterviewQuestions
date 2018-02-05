# 这里主要讲解碰见的面试题目

### 1.JavaScript声明变量的6种方法？

> ES5中有两种变量声明的方法：```var```和```function```。ES6中添加了```let```和```const```命令还有```import```和```class```命令。

### 2.顶层对象的属性有哪些？

> 在浏览器环境指向的是```window```,Node中指向的是```global```,在ES5中顶层对象和全局变量是等价的，而在ES6中更改了这一点，为了保证兼容性```var```和```function```依旧是顶层对象属性，而```let```和```const```命令还有```class```命令不属于顶层对象属性。

### 3.请看下面的题目进行思考会打印什么？[解决问题](https://github.com/liu33286821/InterviewQuestions/blob/master/image/3.%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3.md)
![tool-editor](https://github.com/liu33286821/InterviewQuestions/blob/master/image/javascript-this.png)

### 4. 1,1,2,3,5,8,13,21,......  使用函数来进行获取第n个数

> 此题目主要来源于 **语言精髓**这本书。
![tool-editor](https://github.com/liu33286821/InterviewQuestions/blob/master/image/fibonacci.png)