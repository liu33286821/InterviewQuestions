# 关于axios自己学习的知识。

在Vue请求中，请求数据的函数都会放在```created生命周期```中，主要请求数据方式有两种。

````javascript
    import axios from 'axios'
    //在页面的methods写个内部函数 然后其在created生命周期调用。 当然也可以在生命周期直接使用
    axios.get(url,{
        params: {
            id: '123456'
        }
    }).then( (res) => {
        console.log(res)
    })
    
    
    axios.post(url, {
        firstName: 'Fred',
        lastName: '123'
    }).then((res) => {
    console.log(res)
    })
````

在axios中还可以设置全局配置。在开发的时候基本请求的地址都会指向一个域名，那么就可以设置一个公共路径

```javascript
    axios.defaults.baseURL = '请求的公共路径'
```