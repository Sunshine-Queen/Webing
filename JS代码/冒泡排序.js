function bubbleSort(arr) {
    var i,
        j;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var arr = [22, 11, 55, 44, 33];
var arr1 = [65, 11, 10, 4, 33];
var arrSorted = bubbleSort(arr);
var arrSorted1 = bubbleSort(arr1);
console.log(arrSorted);
console.log(arrSorted1);