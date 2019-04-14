'use strict';

const button = document.querySelector('.button');
const input = document.querySelector('.input');
const counter = document.querySelector('.counter');
const result = document.querySelector('.result');
const reset = document.querySelector('.reset');
let randomNumberSelected = getRandomNumber(100);
let clicks = 0;
counter.innerHTML = clicks;

// Function to get random number
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max)
};

//Function to compare random number with input value
function getRandomCompared() {
    let userNumber = parseInt(input.value);
    console.log(userNumber);
    if (randomNumberSelected === userNumber) {
        printResult(result, 'You win!! 🎉');
    } else if (userNumber > 100) {
        printResult(result, 'Can\'t be bigger than 100');
    } else if (userNumber < 0) {
        printResult(result, 'Can\'t be smaller than 0');
    } else if (randomNumberSelected < userNumber) {
        printResult(result, 'Too hight 🌡, try again');
        add1Counter();
    } else if (randomNumberSelected > userNumber) {
        printResult(result, 'Too short ☃, try again');
        add1Counter();
    } else {
        printResult(result, 'Please, enter a valid number');
    }
}

//Function to print result
function printResult(constName, text) {
    constName.innerHTML = text;
}

//Function to add +1 on counter
function add1Counter() {
    clicks += 1;
    counter.innerHTML = clicks;
}

//Function to press Enter to run function getRandomCompared()
function pressEnter(e) {
    if (e.keyCode == 13) {
        getRandomCompared();
    }
}

//Function to reset game
function resetGame() {
    input.value = '';
    clicks = 0;
    counter.innerHTML = clicks;
    result.innerHTML = 'Escribe un número y dale a <em>Prueba</em>';
    randomNumberSelected = getRandomNumber(100);
}

console.log(randomNumberSelected);

button.addEventListener('click', getRandomCompared);
window.addEventListener('keydown', pressEnter);
reset.addEventListener('click', resetGame);
