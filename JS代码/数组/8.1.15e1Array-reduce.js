//想要在特定的数组实例中，访问并渐次处理各元素的数据，可通过Array对象实例支持的函数reduce或reduceRight()来实现
let numbers = [2, 3, 7, 11, 13, 17, 19, 23, 29];

let totals = numbers.reduce((pile, current) => pile + current);

console.log(totals);
totals = numbers.reduce((pile, current) => pile + current, 0);

console.log(totals);

totals = numbers.reduce((pile, current) => pile + current, 200);

console.log(totals);
console.log('');
///
let n01 = [3, 7, 2, 9];
let n02 = [10, 80, 50, 70];
let n03 = [200, 500, 100, 400];

let matrix = [n01, n02, n03];

function vertically_add(piles, current) {
    for (let i = 0; i < piles.length; i++) {
        piles[i] += current[i];
    }

    return piles;
}
let column_summations = matrix.reduce(vertically_add, Array(n01.length).fill(0));

console.log(column_summations);
console.log('');
///
let box = ['apple', 'guava', 'durian', 'apple', 'guava', 'peach', 'apricot', 'peach', 'durian', 'apple'];

function count_fruit(piles, current) {
    console.log(current);

    if (!(current in piles))
        piles[current] = 1;
    else
        piles[current]++;

    return piles;
}

let inventory = box.reduce(count_fruit, {});

console.log(inventory);