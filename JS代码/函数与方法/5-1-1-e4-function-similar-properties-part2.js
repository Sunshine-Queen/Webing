var cubic_obj = {
    length: 1,
    width: 1,
    height: 1,
    volume: function() {
        return this.length * this.width * this.height;
    },
    surface_area() {
        with(this)
        return 2 * (length * width + width * height + height * length);
    }
}

console.log(cubic_obj.volume());

console.log(cubic_obj.surface_area());

console.log('');

cubic_obj.length = 10;
cubic_obj.width = 20;
cubic_obj.height = 30;

console.log(cubic_obj.volume());

console.log(cubic_obj.surface_area());