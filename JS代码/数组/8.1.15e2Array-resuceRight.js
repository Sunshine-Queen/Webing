let numbers = [2, 3, 7, 11, 13, 17, 19, 23, 29];
let message = '';

function summation(pile, current) {
    message += ' -> ' + current;

    return pile + current;
}
totals = numbers.reduce(summation, 0);

console.log(message);
console.log(totals);
console.log('');

message = '';
totals = numbers.reduceRight(summation, 0);

console.log(message);
console.log(totals);