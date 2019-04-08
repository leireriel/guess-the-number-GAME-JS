'use strict';

const button = document.querySelector('.button');

//Function to get random number 0-100
function getRandomNumber() {
    const randomNumber = Math.ceil(Math.random() * 100);
    console.log(randomNumber);
}

//Function to compare both numbers
function compareNumbers() {
    
}

getRandomNumber();

button.addEventListener('click', compareNumbers);
