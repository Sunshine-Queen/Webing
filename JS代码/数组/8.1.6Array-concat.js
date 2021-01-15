//想要将多个数组实例，合并成为新的数组实例，可通过Array对象实例支持的函数concat()来实现
let a01 = [1, 3, 5];
let a02 = [2, 4, 6];
let a03 = ['x', 'y', 'z'];
let combination = a01.concat(a02, a03);
console.log(combination);
console.log('-----------------');

combination = [...a01, ...a02, ...a03];
//[...a01, ...a02, ...a03]等价于a01.concat(a02, a03)
console.log(combination);
console.log('-----------------');