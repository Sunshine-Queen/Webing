let textfield = document.createElement('input');

textfield.id = 't01';

textfield.style.fontSize = '2em';
textfield.style.paddingLeft = '5px';
textfield.style.color = 'RoyalBlue';

document.body.innerHTML += '<p></p>';

document.body.appendChild(textfield);

let message_box = document.createElement('span');

message_box.id = 'mbox';
message_box.style.fontSize = '1.5em';
message_box.style.marginLeft = '15px';

document.body.appendChild(message_box);

textfield.focus();

///
let message_promise;

function promise_executor(resolve, reject) {
    if (t01.value != '') {
        resolve('at most 12 characters.');
    } else {
        reject('you have only 5 seconds to input!');
    }
}

function positive(message) {
    mbox.style.color = 'ForestGreen';
    mbox.innerHTML = message;
}

function negative(message) {
    mbox.style.color = 'Pink';
    mbox.innerHTML = message;
}

function check_error() {
    message_promise = new Promise(promise_executor);

    message_promise.then(positive, negative);
}

setTimeout(check_error, 5000);