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

```javascript
    var arr = [1,2,3,4,5,6]
    Array.prototype.sum = function() {
      var sum = 0
      if(!this.length) return sum
      this.forEach(function(value,index) {
        sum +=value
      })
      return sum
    }
    var sum = arr.sum()
```

### 3.移除数组arr中所有值与item相等的元素。不要直接修改数组arr，结果返回新的数组。

```javascript
     var arr = [1,2,3,4,3,5,6]
     var item = 3
     Array.prototype.RemoveRepeat = function(item) {
        var arr = []
           this.forEach(function (value,index) {
              if(item !== value) {
                 arr.push(value)
              }
           })
        return arr
     }
     var arr2 = arr.RemoveRepeat(item)
     console.log(arr)
     console.log(arr2)
```

### 4.移除数组arr中所有值与item相等的元素。直接在给定的arr数组上进行操作。 并将结果返回。

```javascript
     var arr = [1,2,3,4,3,5,6]
     var item = 3
     Array.prototype.RemoveRepeat = function(item) {
       this.forEach(function (value,index) {
          if(item !== value) {
             this.slice(index,1)
          }
       })
       return this
     }
     arr.RemoveRepeat(item)
     console.log(arr)
```

### 5.在数组arr末尾添加元素item。不要直接修改,结果返回新的数组。

```javascript
    var arr = [1,2,3,4,3,5,6]
    var item = 3
    var arr2 = []
    function append(arr,item) {
        var array = []
        return array.concat(arr,[item])
    }
    console.log(append(arr,item))
    console.log(arr)
```

### 6.在数组arr末尾删除最后一个元素。不要直接修改,结果返回新数组。