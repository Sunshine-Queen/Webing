function selectionSort(arr) {
    var maxIndex;
    for (var i = 0; i < arr.length - 1; i++) {
        maxIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        if (maxIndex != i) {
            var temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }
    return arr;
}
// 先选择后比较调换位置
var arr = [12, 11, 15, 3, 2, 6, 8, 1];
var arr1 = [1, 2, 3, 15, 6, 8, 11, 12]
var arrSorted = selectionSort(arr);
var arrSorted1 = selectionSort(arr1);
console.log(arrSorted);
console.log(arrSorted1);