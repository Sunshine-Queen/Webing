//想要判断在特定数组实例中，其各元素的数据是否符合特定条件，可以通过Array对象实例支持的函数every（）和some（）来实现
function comparing(value, index, array) {
    return value > 0 && value < 20;
}
let a01 = [24, 36, 10, 5, -2];
let a02 = [1, 15, 8, 3, 19];

console.log(a01.every(comparing));
console.log(a02.every(comparing)); //every均满足
console.log('');

console.log(a01.some(comparing));
console.log(a02.some(comparing)); //some部分满足