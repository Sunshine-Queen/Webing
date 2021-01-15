//想要将数组实例中各元素的数据，连接成为新的字符串，可通过Array对象支持的函数toString（）或者join()来实现
let fruits = ['apricot', 'blueberry', 'cranberry', 'durian'];
let str01 = fruits.toString();
let str02 = fruits.join(',');
let str03 = fruits.join();
console.log(str01);
console.log(str02);
console.log(str03); //这三个具有相同的效果，均会返回【以逗号作为分隔符，并连接变量fruits的数组实例中各字符串】apricot,blueberry,cranberry,durian

let str04 = fruits.join('  ');
console.log(str04);