# 手写JavaScript

## 1.找出元素item在给定数组中的位置？

```javascript
    var arr = [1,2,3,4,5,6] //数组长度不固定
    var item = 3
    arr.forEach(function(value,index) {
      if(value === item) {
          console.log(index)
      }
    })
```


### 2.计算arr所有元素的总和？

![tool-editor](https://github.com/liu33286821/InterviewQuestions/blob/master/code_image/two.png)