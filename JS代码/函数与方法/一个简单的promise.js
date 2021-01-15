var thing = new Promise(function(resolve, reject) {
    console.log('Run!');
    setTimeout(function() {
        reject();
    }, 3000);
})
thing.then(function() {
    console.log('thing.then...');
})
thing.catch(function() {
    console.log('thing.catch...');
})