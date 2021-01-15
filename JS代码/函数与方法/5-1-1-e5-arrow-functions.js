function sphere01(r) {
    values = {};

    values.volume = 4 / 3 * Math.PI * Math.pow(r, 3);
    values.surface_area = 4 * Math.PI * r * r;

    return values;
}
let sphere02 = (r) => { return { volume: 4 / 3 * Math.PI * Math.pow(r, 3), surface_area: 4 * Math.PI * r * r } };

console.log(sphere02(10));

let sphere03 = r => { return { volume: 4 / 3 * Math.PI * Math.pow(r, 3), surface_area: 4 * Math.PI * r * r } };

console.log(sphere03(10));

let sphere04 = r => ({ volume: 4 / 3 * Math.PI * Math.pow(r, 3), surface_area: 4 * Math.PI * r * r });

console.log(sphere04(10));

let sphere_volume = r => { return 4 / 3 * Math.PI * Math.pow(r, 3) };

console.log(sphere_volume(10));

let sphere_surface_area = r => 4 * Math.PI * r * r;

console.log(sphere_surface_area(10));
setInterval(() => console.log(new Date().getSeconds()), 3000);