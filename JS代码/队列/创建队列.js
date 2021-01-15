//数组数据
let arr = ['a', 'b', 'a', 'c', 'a', 'b', 'd'];

function countTimes() {
    var map = {};
    var i = 0;
    var len = arr.length;
    //循环查找
    for (; i < len; i++) {
        //数组里的i个元素
        var v = arr[i];
        //将数组的i个元素作为map对象的属性查看其属性值
        var counts = map[v];
        //如果map对象没有该属性，则设置该属性的值为1，有的话在其基础上再+1
        if (counts) {
            map[v] += 1;
        } else {
            map[v] = 1;
        }

    }
    return map;
}
console.log(countTimes(map));

//空对象
// var map = {};
// var i = 0, len = arr .length;
// //循环查找
// for (; i < len; i++) {
//      //数组里的i个元素
//     var v = arr [i];
//     //将数组的i个元素作为map对象的属性查看其属性值
//     var counts = map[v];
//     //如果map对象没有该属性，则设置该属性的值为1，有的话在其基础上再+1
//     if (counts) {
//         map[v] += 1;
//     } else {
//         map[v] = 1;
//     }
// }
// console.log(map);