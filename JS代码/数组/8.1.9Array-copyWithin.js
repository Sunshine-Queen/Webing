//先行自我复制连续的数个元素，并用来覆盖到特定索引位置开始的数个元素，可以通过Array对象实例支持的函数copyWithin()来实现
let a00 = ['a', 'b', 'c', 'd', 'e', 'f'];
let a01 = ['a', 'b', 'c', 'd', 'e', 'f'];
let a02 = ['a', 'b', 'c', 'd', 'e', 'f'];
let a03 = ['a', 'b', 'c', 'd', 'e', 'f'];
let a04 = ['a', 'b', 'c', 'd', 'e', 'f'];

// (target)
a01.copyWithin(2);
console.log(a00); //
console.log(a01);
console.log('');

// (target)
a02.copyWithin(-2);

console.log(a00);
console.log(a02);
console.log('');

// (target, start)
a03.copyWithin(0, 2);

console.log(a00); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(a03); //[ 'c', 'd', 'e', 'f', 'e', 'f' ]
console.log('');

// (target, start, end)
a04.copyWithin(-3, 1, 3);

console.log(a00); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(a04); //[ 'a', 'b', 'c', 'b', 'c', 'f' ]
console.log('');