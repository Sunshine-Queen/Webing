//循环访问特定数组实例中的各元素，forEach()
let shapes = ['circle', 'triangle', 'rectangle', 'trapezoid', 'pentagons', 'hexagon', 'heptagon', 'octagon', 'star'];

function display(value) {
    console.log(value);
}

shapes.forEach(display);

console.log('');
shapes.forEach(value => console.log(value));