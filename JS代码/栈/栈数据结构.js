//创建一个基于数组的栈.创建一个类来表示栈
class Stack {
    constructor() {
        this.items = [];
    }
}

//向栈添加元素
// push() {
//         return this.items.push();
//     }
//从栈移除元素
// pop() {
//         return this.items.pop();
//     }
//     //查看栈顶元素
// peek() {
//         return this.items[this.items.length - 1];
//     }
//     //检查栈是否为空
// isEmpty() {
//         return this.items.length === 0;
//     } //如果栈为空的话将返回 true，否则就返回 false
//     //size返回栈的长度。
// size() {
//         return this.items.length;
//     }
//     //清空栈元素
// clear() {
//         this.items = [];
//     }
//使用 Stack 类
const stack = new Stack();
console.log(stack.isEmpty());
stack.push(5);
stack.push(8);