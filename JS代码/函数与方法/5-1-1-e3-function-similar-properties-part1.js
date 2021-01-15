var r_obj = {
    circle_area(r) {
        return Math.PI * r * r;
    },
    circumference(r) {
        return 2 * Math.PI * r;
    },
    sphere_volume(r) {
        return 4 / 3 * Math.PI * Math.pow(r, 3);
    },
    cylinder_volume(r, h) {
        return this.circle_area(r) * h;
    }
}
console.log(r_obj.circle_area(10));

console.log(r_obj['circle_area'](10));

console.log(r_obj.circumference(15));
console.log(r_obj['circumference'](15));

console.log(r_obj.sphere_volume(20));
console.log(r_obj['sphere_volume'](20));

console.log(r_obj.cylinder_volume(10, 20));
console.log(r_obj['cylinder_volume'](10, 20));