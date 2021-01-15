// 在一个数组array包含了顺序的元素[1,2,3....100000],查找目标元素t是否在数组中。
// o(N)
// function LinearSearch(array, t) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === t) {
//             return true;
//         }
//     }
//     return false;
// }
//我们已经提前知道数组是顺序排列的，比如递增顺序。
let array = new Array(10).fill(0);
for (let i = 0; i < 10; i++) {
    array[i] = i;
}

// function BinarySearch(array, t) {
//     var left = 0;
//     var right = array.length - 1;
//     while (left <= right) {
//         var mid = parseInt((left + right) / 2);
//         if (array[mid] === t) {
//             return true;
//         } else if (array[mid] < t) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return false;
// }
// console.log(BinarySearch(array, 10));

// function RecursiveBinarySearch(array, t, left, right) {
//     if (left <= right) {
//         let mid = parseInt((left + right) / 2);
//         if (array[mid] === t) {
//             return mid;
//         } else if (array[mid] < t) {
//             return RecursiveBinarySearch(array, t, mid + 1, right);
//         } else {
//             return RecursiveBinarySearch(array, t, left, mid - 1);
//         }
//     }
//     return -1;

// }
// console.log(RecursiveBinarySearch(array, 8, 0, 10));

let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
];

function searchMatrix(matrix, t) {
    let m = matrix.length;
    let n = matrix[0].length;
    let i = 0,
        j = n - 1; //列
    while (i < m && j >= 0) {
        if (matrix[i][j] === t) {
            return true;
        } else if (matrix[i][j] < t) {
            i += 1;
        } else {
            j -= 1;
        }
    }
    return false;
}
console.log(searchMatrix(matrix, 16));