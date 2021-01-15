// 共有n个台阶，每次只能上1个或者2个台阶，共有多少种方法爬完台阶
// 共有n页书每次只能翻一页书或者两页书，共有多少种方法翻完全书

//假设有100个台阶需要

//f(100)=f(99)+f(98)

// 斐波那契数列
// f(50)=f(49)+f(48)=f(48)+f(47)+f(47)+f(46)
// 初版本
function fibonacci(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (n > 2) {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(50));
// 优化策略：使用空间换时间 预先分配好大内存
//数组 优化版
function fibonacci(n) {
    let res = new Array(n + 1).fill(0);
    res[1] = 1;
    res[2] = 2;
    for (let i = 3; i < n + 1; i++) {
        res[i] = res[i - 1] + res[i - 2];
    }
    return res[n];
}
console.log(fibonacci(50));

// 对象 优化版
let cache = {};

function fib(n) {
    if (!(n in cache)) {
        cache[n] = _fib(n);
    }
    return cache[n];
}

function _fib(n) {
    if (n === 1 || n === 2) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
console.log(fib(50));