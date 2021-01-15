//判断特定元素是否存在于特定数组中
let int_list = [1, 10, 18, 23, 29, 37, 56];
let str_list = ['keyboard', 'mouse', 'screen', 'speaker'];

let result;

result = int_list.indexOf(23);

console.log(result);
result = int_list.includes(23);

console.log(result);
console.log('');
result = int_list.indexOf(45);

console.log(result);

result = int_list.includes(45);

console.log(result);
console.log('');
result = str_list.indexOf('speaker');

console.log(result);

result = str_list.includes('speaker');

console.log(result);
console.log('');

result = str_list.indexOf('joystick');

console.log(result);

result = str_list.includes('joystick');

console.log(result);