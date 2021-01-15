let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers[numbers.length] = 10; //在数组末尾添加元素
// console.log(numbers);
numbers.push(11);
numbers.push(12, 13);
// console.log(numbers);

//在数组开头插入元素
Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
};
numbers.insertFirstPosition(-1);
// console.log(numbers);

//使用unshift方法
numbers.unshift(-2);
numbers.unshift(-4, -3);
// console.log(numbers);

//从数组末尾删除元素
numbers.pop();
// console.log(numbers);

// 使用shift()方法删除数组第一个元素
numbers.shift();
// console.log(numbers);

//使用shift()和unshift()方法可以用数组模拟基本的队列数据结构


numbers.splice(5, 3) //删除了从数组索引5开始的3个元素
    // console.log(numbers);

//在指定位置添加索引
numbers.splice(5, 0, 2, 3, 4);
// console.log(numbers);

//javaScript只支持一维数组，并不支持矩阵，但我们可以用数组嵌套数组，实现矩阵或者任一多维数组
let averageTemp = [];
//day1
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;
//day2
averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 73;
//迭代二维数组的元素
function printMatrix(myMatrix) {
    for (let i = 0; i < myMatrix.length; i++) {
        for (let j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);
        }
    }
}
// printMatrix(averageTemp);

//多维数组
// 比如创建一个3*3*3的矩阵
const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = []; //我们需要初始化每个数组
    for (let j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = [];
        for (let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}
// 以下代码用于输出这个3*3*3矩阵的内容
for (let i = 0; i < matrix3x3x3.length; i++) {
    for (let j = 0; j < matrix3x3x3[i].length; j++) {
        for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
            console.log(matrix3x3x3[i][j][z]);
        }
    }
}