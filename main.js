// let clearButton = document.querySelector('.clear-color');
// let colorBlock = document.querySelector('.color-block');
// let colorInput = document.querySelector('.color-input');


// function paintBlock() {
//     colorBlock.style.backgroundColor = colorInput.value
// }

// colorInput.addEventListener('input', paintBlock);

// paintBlock();

// clearButton.addEventListener('click', function() {
//     colorBlock.style.removeProperty('background-color');
//     colorInput.value = '';
// });


// let number = document.querySelector('.number');
// let increement = document.querySelector('.increement');

// function increemetNumber() {
//     let currentNumber = parseInt(number.textContent);
//     number.textContent = currentNumber + 1;
// }

// increement.addEventListener('click', increemetNumber);


// let time = document.querySelector('.time');
// let start = document.querySelector('.start');
// let inputTime = document.querySelector('.input-time');
// let interval;

// function begin() {
//     clearInterval(interval);
//     time.textContent = parseInt(inputTime.value);
//     if (time.textContent !== '0') {
//         interval = (setInterval(() => {
//             count();
//         }, 1000));
//     }
// }

// function count() {
//     if (time.textContent !== '0')
//         time.textContent = parseInt(time.textContent) - 1;
// }
// start.addEventListener('click', begin);
let body = document.body;
let message = document.createElement('h2');
let inputMessage = document.createElement('input')
let messageInterval
message.className = 'message';
inputMessage.className = 'inputMessage';

body.append(message, inputMessage);

function writeMessage() {

    clearTimeout(messageInterval);
    messageInterval = setTimeout(() => {
        delayMessage();
    }, 300);
}

function delayMessage() {
    message.textContent = inputMessage.value;
}

inputMessage.addEventListener('input', writeMessage);