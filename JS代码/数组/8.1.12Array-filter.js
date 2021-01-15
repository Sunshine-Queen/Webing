//筛选出符合特定条件的所有元素，以组成新的数组实例，可使用Array对象实例支持的函数filter()
let names = ['Eric', 'Sam', 'Jimmy', 'Paula', 'Daisy', 'Jennifer', 'Sean'];

function check(name) {
    return name.length < 5;
}
let shorts = names.filter(check); //返回字符个数小于5的字符串

console.log(shorts);
console.log('');
///
let numbers = [123, 456, 789, 55, 22, 33];
let smalls = numbers.filter(num => num % 3 == 0);

console.log(smalls);