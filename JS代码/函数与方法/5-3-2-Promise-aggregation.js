document.body.innerHTML += '<p></p>';

let textfield;

for (let i = 1; i < 5; i++) {
    textfield = document.createElement('input');

    textfield.id = 't0' + i;

    textfield.style.width = '80px';

    textfield.style.fontSize = '2em';
    textfield.style.paddingLeft = '5px';
    textfield.style.marginRight = '5px';
    textfield.style.color = 'RoyalBlue';

    document.body.appendChild(textfield);
}

let message_box = document.createElement('span');

message_box.id = 'mbox';

message_box.style.fontSize = '1.5em';
message_box.style.marginLeft = '15px';

document.body.appendChild(message_box);

t01.focus();

///
let promise_array = [];

let filled = 0,
    blank = 0;

let id_no;

function promise_executor(resolve, reject) {
    let ref = document.getElementById('t0' + id_no);

    console.log(ref);

    if (ref.value != '') {
        ref.style.borderColor = 'Green';

        resolve();
    } else {
        ref.style.borderColor = 'Red';

        reject();
    }
}

function check_error() {
    for (id_no = 1; id_no < 5; id_no++) {
        promise_array[id_no - 1] = new Promise(promise_executor);

        promise_array[id_no - 1].then(positive, negative);
    }

    Promise.all(promise_array).then(final_success, final_failure);
}

function positive(value) {
    filled++;
}

function negative(value) {
    console.log('value =', value);
    blank++;
}

function final_success(value_or_list) {
    mbox.style.color = 'ForestGreen';
    mbox.innerHTML = 'All fields are filled.';
}

function final_failure(value_or_list) {
    mbox.style.color = 'Pink';
    mbox.innerHTML = `${blank} Blank field is/are left...`;
}

setTimeout(check_error, 4000);