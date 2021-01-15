//数组实例的扩展运算，是通过扩展运算符【...】,衔接其数据为数组实例的变量的名称 例如【...a01】
let a01 = [1, 2, 3];
let a02 = [15, 25, 35];
let a03 = [137, 256, 391];

let result = [a01, a02, a03];

console.log(result[1]);
console.log(result[2][2]);
console.log('');

result = [...a01, ...a02, ...a03];

console.log(result);
console.log('');

console.log(a01);
console.log(...a01);
console.log(1, 2, 3);