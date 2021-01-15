function profile(a01 = 'none', a02 = 'none', a03 = 'none', ...others) {
    console.log(arguments);
    console.log(arguments.length);
    console.log('');

    console.log(arguments[0], arguments[1], arguments[2]);
    console.log(a01, a02, a03);
    console.log('');

    console.log(others);
    console.log(arguments[3], arguments[4]);
    console.log(others[0], others[1]);
}
profile('name', 'gender', 'age', 'position', 'department');

console.log('');

profile();

///
console.log('\n\n');

let arg_list = ['model', 'name', 'color', 'weight', 'price'];

profile(...arg_list);