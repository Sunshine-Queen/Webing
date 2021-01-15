function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const left = [],
        right = [];
    const index = Math.floor(arr.length / 2);
    const base = arr.splice(index, 1)[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < base) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([base], quickSort(right));

}
const arr = [12, 14, 31, 11, 1];
console.log(quickSort(arr));