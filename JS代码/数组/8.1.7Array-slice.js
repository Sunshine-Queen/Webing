//想要在特定数组实例中，复制数个连续的元素，放置于新的数组实例，可通过Array对象实例支持的函数slice()来达成。
//slice() 方法可从已有的数组中返回选定的元素。
//arrayObject.slice(start,end)
// start 必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。
//end 可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
let vegetables = ['Lettuce', 'broccoli', 'spinach', 'kale', 'cabbage', 'onion', 'green beans'];

let sliced_list = vegetables.slice(2);
console.log(sliced_list); //[ 'spinach', 'kale', 'cabbage', 'onion', 'green beans' ]
console.log('----------------');

sliced_list = vegetables.slice(3, 6);
//在变量vegetables的数组实例中，分割slice而复制出从索引值为3（第四个）的元素‘kale’开始到索引值为5（第6个）的元素‘onion’为止
console.log(sliced_list); //[ 'kale', 'cabbage', 'onion' ]
console.log('-------------------');

sliced_list = vegetables.slice(-2);

console.log(sliced_list); //[ 'onion', 'green beans' ]
console.log('---------------');