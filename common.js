export default function  ObjectSort (type, key ) {  //根据数组对象进行升降排序
    /*
    * type -> 索引  我们需要根据这个索引来进行排序。
    * key  -> 排序顺序。 如果不传值  那么进行按照从高到低排序。 这个值也可以随便定义。
    * */
    key = key ? 1 : -1;
    return function (a, b) {  //这里我们重新更新了arr数组排序的方法。
        a = a[type]   //获取排序的属性
        b = b[type]
        if(a < b) {
            return key
        }
        if (a > b) {
            return key
        }
        return 0
    }

}