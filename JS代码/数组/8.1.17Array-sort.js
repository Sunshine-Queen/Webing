//想要在特定的数组实例中，根据各元素的数值或字符编码顺序，重新进行升序或降序的排列，可通过Array对象实例支持的函数sort()来实现
let a01 = Array.from({ length: 7 }, () => parseInt(100 * Math.random()));

console.log(a01);
let a02 = a01.sort();
console.log(a02);

function set_descending(previous, current) {
    // Swap two adjacent numbers if positive.
    return current - previous; //被传入的当前值current,减掉被传入的上一个数值previous的结果值为正值，则交换前后两个数值。这就意味着，在特定数组实例中的各整数值，会被由大到小的排序。

}

let a03 = a01.sort(set_descending);

console.log(a03);