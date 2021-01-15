range_calc(5, 15, '+');
console.log('');

function range_calc(start, end, type) {
    let result;
    if ('+-*/'.indexOf(type) == -1) {
        console.log('Unsupported calculation...');
        return NaN;
    } else {
        if ('*/'.indexOf(type) == -1) result = 0;
        else result = 1;
    }
    for (let i = start; i < end + 1; i++)
        eval(`result ${type}= i ;`);

    console.log(`The result of operator ${type} action from ${start} to ${end}=${result}`);
    return result;
}
let returned = null;
range_calc(1, 10, '+');
range_calc(1, 10, '-');

returned = range_calc(1, 10, '*');
console.log(returned);
console.log('');

returned = range_calc(1, 3, '/');
console.log(returned);
console.log('');

let displaying = function(num) {
    console.log(`The tested number = ${num}`);
};

displaying(12);