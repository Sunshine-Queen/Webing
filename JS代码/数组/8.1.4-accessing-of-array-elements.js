//如果想要放入新元素的数据到特定数组实例中，可通过Array对象实例支持的函数push()或unshift()
//如果想要取出新元素的数据到特定数组实例中，可通过Array对象实例支持的函数pop()或shift()
let balls = ['baseball', 'basketball'];
balls.push('marble');
let new_length = balls.push('dodgeball', 'fireball', 'Earth');
console.log(balls.length == new_length);
console.log(balls); //[ 'baseball', 'basketball', 'marble', 'dodgeball', 'fireball' ,'Earth']
console.log('-----------------');
let drawed_data = balls.pop();
console.log(drawed_data); //Earth
console.log(balls); //[ 'baseball', 'basketball', 'marble', 'dodgeball', 'fireball' ]
console.log('-----------------');
balls.unshift('pluto'); //在前端新增元素unshift
console.log(balls); //[ 'pluto','baseball', 'basketball', 'marble', 'dodgeball', 'fireball' ]
balls.unshift('Moon', 'Mars');
console.log(balls);