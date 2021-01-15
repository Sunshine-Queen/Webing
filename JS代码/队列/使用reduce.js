// let arr = ['a', 'b', 'a', 'c', 'a', 'b', 'd'];
// var countedNames = arr.reduce((obj, name) => {
//         if (name in obj) {
//             obj[name]++
//         } else {
//             obj[name] = 1
//         }
//         return obj
//     }, {})
//     //reduce的第二个参数就是obj的初始值
// console.log(countedNames)
let arr = ['a', 'b', 'a', 'c', 'a', 'b', 'd'];
function countTimes(){ 
    return arr.reduce(function(prev,next){ 
        prev[next] = (prev[next] + 1) || 1; 
        return prev; 
    },{}); 
} 
console.log(countTimes());
