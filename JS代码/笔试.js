function selsetSort(arr) {
    var len = arr.length;
    var minIndex;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[minIndex] > arr[j]) { //寻找最小值
                minIndex = j; //保存最小值的索引
            }
        }
        if (minIndex != i) {
            var temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}
var arr = [3, 2, 6, 8, 1];
var arrSorted = selsetSort(arr);
console.log(arrSorted);