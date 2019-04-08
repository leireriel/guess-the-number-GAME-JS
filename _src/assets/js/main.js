'use strict';

const button = document.querySelector('.button');
const input = document.querySelector('.input');
const counter = document.querySelector('.counter');
const result = document.querySelector('.result');
let clicks = 0;

// Function to get random number
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

//Function to compare random number with input value
function getRandomCompared() {
    console.log(input.value);
    if (randomNumberSelected == input.value) {
        result.innerHTML = 'You win!!';
    } else if (randomNumberSelected < input.value) {
        result.innerHTML = 'Too hight 😜, try again';
    } else if (randomNumberSelected > input.value) {
        result.innerHTML = 'Too short 😜, try again';
    } else {
        console.log('Please, write a valid number');
    }
}

//Function to count clicks
function countClick() {
    clicks += 1;
    counter.innerHTML = clicks;
}

let randomNumberSelected = getRandomInt(100);
console.log(randomNumberSelected);

button.addEventListener('click', () => {
    getRandomCompared();
    countClick();
});
