function* iterator02(end_value) {
    for (let i = 0; i < end_value; i++) {
        yield parseInt(10 * (i + Math.random()));
    }
}

for (let n of iterator02(10)) {
    console.log(n);
}

let numbers = [...iterator02(20)];

let [a, b, c, ...others] = iterator02(8);

console.log(numbers);
console.log(a, b, c);
console.log(others);