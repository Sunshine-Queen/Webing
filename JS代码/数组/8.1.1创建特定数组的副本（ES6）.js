let array01 = Array.of(1, 'two', 3, 'four', 5, 'six');
let array02 = [1, 'two', 3, 'four', 5, 'six'];
let array03 = Array(1, 'two', 3, 'four', 5, 'six');
let array04 = new Array(1, 'two', 3, 'four', 5, 'six');

console.log(array01);
console.log(array02);
console.log(array03);
console.log(array04);

let array09 = Array.of(5); //[5]
let array10 = [5];

let array11 = Array(5); //五个空元素
let array12 = new Array(5); //[ <5 empty items> ]
console.log(array09);
console.log(array10);
console.log(array11);
console.log(array12);
console.log('-- -- -- -- -- -- -- -- -- -- -- -- -- -- - ');
console.log('-- -- -- -- -- -- --valueOf -- -- -- -- -- -- -- - ');
let a01 = ['1st', '2nd', '3rd', '4th'];
let a02 = ['1st', '2nd', '3rd', '4th'];
console.log(a01 == a02); //false 因为内容相同，所占的内存地址不相同
let a03 = a01;
console.log(a01 == a03); //true 因为变量a01和a03占用相同的内存地址
console.log('-- -- -- -- -- -- -- -- -- -- -- -- -- -- - ');
let a04 = a01.valueOf();
console.log(a01 == a01.valueOf()); //true
console.log(a01 == a04); //true  对于Array对象的实例来说，其实例和其实例经过函数valueOf()处理之后所返回的新实例，占用了相同的内存地址