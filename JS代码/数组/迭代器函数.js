function isEven(x) {
    // 如果 x 是 2 的倍数，就返回 true
    // console.log(x);
    return x % 2 === 0 ? true : false;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// 1.用 every 方法迭代,every 方法会迭代数组中的每个元素，直到返回 false。
// numbers.every(isEven);
//2. 用 some 方法迭代,它和 every 的行为相反，会迭代数组的每个元素，直到函数返回 true。
// numbers.some(isEven);
//3. 用 forEach 方法迭代,迭代整个数组,和使用 for 循环的结果相同。
// numbers.forEach(x => console.log(x % 2 === 0));

//JavaScript 还有两个会返回新数组的迭代方法。第一个是 map。
// const myMap = numbers.map(isEven);
// console.log(myMap);
//还有一个 filter 方法，它返回的新数组由使函数返回 true 的元素组成。
// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

//使用reduce方法对数组所有元素求和
// sum = numbers.reduce((previous, current) => previous + current);
// console.log(sum);

//可以访问numbers中的15个元素
// iterator = numbers[Symbol.iterator]();
// for (const n of iterator) {
//     console.log(n);
// }
// 数组的 entries、keys 和 values 方法
// let aEntries = numbers.entries(); // 得到键值对的迭代器
// console.log(aEntries.next().value); // [0, 1] - 位置 0 的值为 1
// console.log(aEntries.next().value); // [1, 2] - 位置 1 的值为 2
// console.log(aEntries.next().value); // [2, 3] - 位置 2 的值为 3
//使用循环全部展示
// aEntries = numbers.entries();
// for (const n of aEntries) {
//     console.log(n);
// }
//keys 方法会返回 numbers 数组的索引。一旦没有可迭代的值，aKeys.next()就会返回一
//个 value 属性为 undefined、done 属性为 true 的对象。如果 done 属性的值为 false，就意
//味着还有可迭代的值。
// const aKeys = numbers.keys(); // 得到数组索引的迭代器
// console.log(aKeys.next()); // {value: 0, done: false }
// console.log(aKeys.next()); // {value: 1, done: false }
// console.log(aKeys.next()); // {value: 2, done: false }
//values 方法返回的@@iterator 则包含数组的值。
// const aValues = numbers.values();
// console.log(aValues.next()); // {value: 1, done: false }
// console.log(aValues.next()); // {value: 2, done: false }
// console.log(aValues.next()); // {value: 3, done: false }

//Array.from 方法根据已有的数组创建一个新数组。
// let numbers2 = Array.from(numbers);
// console.log(numbers2);
// [
//     1,  2,  3,  4,  5,  6,
//     7,  8,  9, 10, 11, 12,
//    13, 14, 15
//  ]
// let evens = Array.from(numbers, x => (x % 2 == 0));
// console.log(evens);
// [
//     false, true,  false,
//     true,  false, true,
//     false, true,  false,
//     true,  false, true,
//     false, true,  false
//   ]
//Array.of 方法根据传入的参数创建一个新数组。
// let numbers3 = Array.of(1);
// let numbers4 = Array.of(1, 2, 3, 4, 5, 6); //let numbers4 = [1, 2, 3, 4, 5, 6]; 
// let numbersCopy = Array.of(...numbers4); //展开运算符（...）会把 numbers4 数组里的值都展开成参数。
// console.log(numbersCopy);

//fill 方法用静态值填充数组。
let numbersCopy = Array.of(1, 2, 3, 4, 5, 6);
numbersCopy.fill(0);
console.log(numbersCopy);
numbersCopy.fill(2, 1); //数组中从 1 开始的所有位置上的值都是 2
console.log(numbersCopy);
numbersCopy.fill(1, 3, 5); //会把 1 填充到数组索引 3 到 5 的位置（不包括 3 和 5），
console.log(numbersCopy);
//创建数组并初始化值的时候，fill 方法非常好用，
let ones = Array(6).fill(1);
console.log(ones);
let copyArray = [1, 2, 3, 4, 5, 6];
//copyWithin 方法复制数组中的一系列元素到同一数组指定的起始位置。
copyArray.copyWithin(0, 3); //把 4、5、6 三个值复制到数组前三个位置
console.log(copyArray); //[ 4, 5, 6, 4, 5, 6 ]
//把 4、5 两个值（在位置 3 和 4 上）复制到位置 1 和 2，
copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(1, 3, 5);
console.log(copyArray); //[ 1, 4, 5, 4, 5, 6 ]会把从位置 3 开始到位置 5 结束（不包括 3 和 5）的元素复制到位置 1