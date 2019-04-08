'use strict';

const button = document.querySelector('.button');
const input = document.querySelector('.input');
const counter = document.querySelector('.counter');
const result = document.querySelector('.result');
const randomNumberSelected = getRandomNumber(100);
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
        result.innerHTML = 'You win!!';
    } else if (randomNumberSelected < userNumber) {
        result.innerHTML = 'Too hight 😜, try again';
        clicks += 1;
        counter.innerHTML = clicks;
    } else if (randomNumberSelected > userNumber) {
        result.innerHTML = 'Too short 😜, try again';
        clicks += 1;
        counter.innerHTML = clicks;
    } else {
        result.innerHTML = 'Please, enter a valid number';
    }
}

function pressEnter(e) {
    if (e.keyCode == 13) {
        getRandomCompared();
    }
}

console.log(randomNumberSelected);

button.addEventListener('click', getRandomCompared);
window.addEventListener('keypress', pressEnter);
