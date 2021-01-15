//想要找出符合特定条件的第一个元素的数据（data）或索引值（index value），可通过Array对象实例支持的函数find（）或者findIndex（）来实现
let numbers = [10, 30, 20, 55, 15, 70, 23];

numbers.sort();
console.log(numbers);

let gt3 = n => n > 30;

console.log(numbers.find(gt3));
console.log(numbers.findIndex(gt3));