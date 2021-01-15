function binary(find, arr, low, high) {
    if (low <= high) {
        // if (arr[low] == find) {
        //     return low;
        // }
        // if (arr[high] == find) {
        //     return high;
        // }
        var mid = Math.ceil((low + high) / 2);
        if (arr[mid] == find) {
            return mid;
        } else if (arr[mid] > find) {
            return binary(find, arr, low, mid - 1);
        } else {
            return binary(find, arr, mid + 1, high);
        }
    }
    return -1;
}
var Arr = [3, 5, 6, 7, 9, 12, 15];
var sorted = binary(7, Arr, 0, Arr.length - 1);
console.log(sorted);
//Math.ceil()  “向上取整”， 即小数部分直接舍去，并向正数部分进1