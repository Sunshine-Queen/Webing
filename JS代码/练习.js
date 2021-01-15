//  function bubbleSort(arr) {
//      var j;
//      var tempExchangeVal;
//      for (i = arr.length; i > 0; i--) {
//          for (j = 0; j < i - 1; j++) {
//              if (arr[j] > arr[j + 1]) {
//                  tempExchangeVal = arr[j];
//                  arr[j] = arr[j + 1];
//                  arr[j + 1] = tempExchangeVal;
//              }
//          }
//      }
//      return arr;
//  }
//  var arr = [22, 11, 55, 44, 33];
//  var arrSorted = bubbleSort(arr);
//  console.log(arrSorted);
//选择排序
//   function selsetSort(arr) {
//      var len = arr.length;
//      var minIndex;
//      for (var i = 0; i < len - 1; i++) {
//          minIndex = i;
//          for (var j = i + 1; j < len; j++) {
//              if (arr[minIndex] > arr[j]) { //寻找最小值
//                  minIndex = j; //保存最小值的索引
//              }
//          }
//          if (minIndex != i) {
//              var temp = arr[i];
//              arr[i] = arr[minIndex];
//              arr[minIndex] = temp;
//          }
//      }
//      return arr;
//  }
//  var arr = [3, 2, 6, 8, 1];
//  var arrSorted = selsetSort(arr);
//  console.log(arrSorted); 
// 快速排序
function quicksort(arr, left, right) {
    var i = left;
    var j = right;
    var key = arr[left];
    if (left >= right) {
        return;
    }
    while (i < j) {
        while (arr[j] > key && i < j) {
            j--;
        }
        while (arr[i] <= key && i < j) {
            i++;
        }
        if (i < j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    arr[left] = arr[i];
    arr[i] = key;
    quicksort(arr, left, i - 1);
    quicksort(arr, i + 1, right);
}
var arr = [3, 1, -5, 6, 0, 2, -1, -1, 3];
console.log(arr);
quicksort(arr, 0, arr.length - 1);
console.log(arr);
// function quick_sort(arr, from, to) {
//     var i = from; //哨兵i
//     var j = to; //哨兵j
//     var key = arr[from]; //标准值
//     if (from >= to) { //如果数组只有一个元素
//         return;
//     }
//     while (i < j) {
//         while (arr[j] > key && i < j) { //从右边向左找第一个比key小的数，找到或者两个哨兵相碰，跳出循环
//             j--;
//         }
//         while (arr[i] <= key && i < j) { //从左边向右找第一个比key大的数，找到或者两个哨兵相碰，跳出循环,这里的=号保证在本轮循环结束前，key的位置不变，否则的话跳出循环，交换i和from的位置的时候，from位置的上元素有可能不是key
//             i++;
//         }
//         /**
//           代码执行道这里，1、两个哨兵到找到了目标值。2、j哨兵找到了目标值。3、两个哨兵都没找到(key是当前数组最小值)
//         **/
//         if (i < j) { //交换两个元素的位置
//             var temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;

//         }
//     }
//     arr[from] = arr[i] //
//     arr[i] = key;
//     quick_sort(arr, from, i - 1);
//     quick_sort(arr, i + 1, to);
// }

// var arr = [3, 3, -5, 6, 0, 2, -1, -1, 3];
// console.log(arr);
// quick_sort(arr, 0, arr.length - 1);
// console.log(arr);