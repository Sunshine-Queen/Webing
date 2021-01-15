//判断特定变量当前的数据，是否为数组的实例，可通过Array对象支持的函数isArray()
let instance;

with(console) {
    instance = [];
    log(Array.isArray(instance));

    instance = Array(3);
    log(Array.isArray(instance));

    instance = new Array(3);
    log(Array.isArray(instance));
    log('');

    instance = {};
    log(Array.isArray(instance));

    instance = parseInt(100 * Math.random());
    log(Array.isArray(instance));

    instance = instance < 50;
    log(Array.isArray(instance));
}