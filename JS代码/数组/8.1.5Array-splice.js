//想要在特定的数组实例中，新增或者删除连续多个元素，可以通过Array对象实力支持的函数splice()来实现
//splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。该方法会改变原始数组
//arrayObject.splice(index,howmany,item1,.....,itemX)
// index 必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
//howmany 必需。要删除的项目数量。如果设置为 0，则不会删除项目。
//item1,item2,....itemx可选。向数组添加的新项目。

let vegetables = ['Lettuce', 'broccoli', 'spinach', 'kale', 'cabbge', 'onion', 'green beans'];
console.log(vegetables);
console.log('-----------------');

let draw_list = vegetables.splice(1, 2);
console.log(draw_list); //[ 'broccoli', 'spinach' ]
console.log(vegetables); //[ 'Lettuce', 'kale', 'cabbge', 'onion', 'green beans' ]
console.log('-----------------');

vegetables.splice(1, 0, ...draw_list);
console.log(vegetables);
console.log('-----------------');

vegetables.splice(3, 0, 'garlic');
console.log(vegetables);