(
    function() {
        console.log('Anonymous function 01 is executed.');
    }
)();
void

function() {
    console.log('Anonymous function 02 is executed.');
}();
setTimeout(
    function() { console.log('Showing after 2 seconds.'); },
    2000);
let displaying = function(num = 0) {
    console.log(`The test number =${num}`);
};
displaying(15);

setTimeout(displaying, 1000);

setTimeout(displaying(21), 1500);

setTimeout(() => console.log('The test number = 1800'), 3000);