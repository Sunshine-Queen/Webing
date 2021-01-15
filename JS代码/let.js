if (true) {
    //TDZ开始 temporal dead zone 暂时性死区
    tmp = 'abc'; //ReferenceError
    console.log(tmp); //ReferenceError
    let tmp; //TDZ结束
    console.log(tmp); //undefined
    tmp = 123;
    console.log(tmp);
}
//暂时性死区的本质就是，只要进入当前作用域，所要使用的变量就已经存在，但是不可获取，只有等到变量声明的那一行代码出现，才可以获取和使用该变量。
// let不允许在相同的作用域下重复声明同一个变量