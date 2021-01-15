function cylinder(r, h) {
    function circle(r) {
        var values = {};

        values.area = Math.PI * r * r;
        values.circumference = 2 * Math.PI * r;

        return values;

    }
    var values = {};

    values.circle = circle(r);

    values.volume = values.circle.area * h;
    values.surface_area = 2 * values.circle.area + values.circle.circumference * h;

    return values;

}
let result = cylinder(12, 50);

console.log(result.circle);
console.log(result.volume);
console.log(result.surface_area);