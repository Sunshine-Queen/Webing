let word = 'Happiness';
let a01 = Array.from(word); //通过Array对象的函数from(word),可根据变量word中的字符串'happiness',创建由其各字符所构成的数组实例
let a02 = [...word]; //[...word]等价于Array.from(word)
let a03 = word.split(''); //word.split('')也等价于Array.from(word)
// [
//     'H', 'a', 'p',
//     'p', 'i', 'n',
//     'e', 's', 's'
// ]

console.log(a01);
console.log(a02);
console.log(a03);
console.log("--------------------");

let r1 = 12,
    r2 = 15,
    r3 = 18;
let circle_area01 = r => (Math.PI * r ** 2).toFixed(2); //这个箭头函数相当于定义了函数circle_area01(r)，用来计算出特定半径值的圆面积，并精确到小数第二位。
let a04 = Array.from([r1, r2, r3], circle_area01); //Array.from([r1, r2, r3], circle_area01)会使得变量r1,r2,r3内含的半径值，分别被传入函数circle_area01()中，计算并返回内含其各个圆面积的数组实例
let a05 = Array.from([r1, r2, r3], r => (Math.PI * r ** 2).toFixed(2));

console.log(a04);
console.log(a05);
//[ '452.39', '706.86', '1017.88' ]
console.log("--------------------");

function circle_area02(r) {
    return (Math.PI * r ** 2).toFixed(2);
}
let a06 = Array.from([r1, r2, r3], circle_area02); //Array.from([r1, r2, r3], circle_area02)会使得变量r1,r2,r3内含的半径值，分别被传入函数circle_area02()中，计算并返回内含其各个圆面积的数组实例
console.log(a06);
console.log("--------------------");

let a07 = Array.from({ length: 5 }, (value, index) => index ** 3); //会先行创建存在5个空元素的新数组实例，再通过箭头函数，依次计算出当前参数index的数值的3次方，作为各个空元素的新数值；最后返回内含其各个数值的3次方的数值实例[] [ 0, 1, 8, 27, 64 ]
console.log(a07);
console.log("--------------------");

let redius_list = [10, 18, 24, 50, 80];
//map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。map() 方法按照原始数组元素顺序依次处理元素。map() 不会改变原始数组。
let circle_areas = redius_list.map((r) => (Math.PI * r ** 2).toFixed(2));
console.log(circle_areas);

circle_areas = Array.from(redius_list, (r) => (Math.PI * r ** 2).toFixed(2));
console.log(circle_areas);
console.log("--------------------");

let bases = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
let roots = bases.map(Math.sqrt);
console.log(roots); //[1,2,3,4,5,6,7,8,9,10]
roots = bases.map((b) => Math.sqrt(b));
console.log(roots); //[1,2,3,4,5,6,7,8,9,10]
roots = bases.map((b) => b ** 0.5);
console.log(roots); //[1,2,3,4,5,6,7,8,9,10]