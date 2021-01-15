//填充新元素，覆盖部分的连续元素 fill
let template = ['a', 'b', 'c', 'd', 'e', 'f'];
let a01 = template.slice(0);

a01.fill('?');

console.log(a01);
console.log('');

a01 = template.slice(0);

a01.fill('$', 2); //从索引值为2的元素开始，到最后一个元素为止。

console.log(a01);

a01 = template.slice(0);

a01.fill('*', 2, 5);
console.log(a01);

a01 = template.slice(0);

a01.fill('^', 1, -2);

console.log(a01);

a01 = Array(7).fill('@_@');

console.log(a01);