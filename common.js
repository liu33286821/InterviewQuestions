/*
* 以后做项目需要使用的公共方法。
* */

export function NameSort (arr, name, mode = ' / ') {  //名字组合起来
    /*
    * arr => 你要组合的数组
    * name => 你需要查找的属性
    * mode => 字符串怎么添加
    * */
    if (!arr.length) return
    var singer = []
    arr.forEach((item) => {
        singer.push(item[name])
    })
    if (!singer) return ''
    if (singer.length > 1) {
        return singer.join(mode)
    }
    return singer[0]
}

export function unqiueObject (array, keys) {
    //在使用ES6 语法去重的时候。里面的object对象。 不能去除重复。  在网上查询 引用类型的问题，所以需要自己手写了
    var arr = []
    var hash = {}
    for (let i = 0; i < array.length; i++) {
        var k = unqiueObjectKeysStr(array[i], keys)
        if (!(k in hash)) {
            hash[k] = true
            arr.push(array[i])
        }
    }
    return arr
}
function unqiueObjectKeysStr (obj, keys, mode = '|') {
    var n = keys.length,
        key = []
    while (n--) {
        key.push(obj[keys[n]])
    }
    return key.join(mode)
}