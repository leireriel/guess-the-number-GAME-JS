'use strict';

const button = document.querySelector('.button');
const input = document.querySelector('.input');
const counter = document.querySelector('.counter');
let clicks = 0;

//Function to get random number 0-100 and compare with input value
function getRandomCompared() {
    const randomNumber = Math.ceil(Math.random() * 100);
    console.log(randomNumber);
    console.log(input.value);
    if (randomNumber === input.value) {
        console.log('You win!!');
    } else if (randomNumber < input.value) {
        console.log('Too hight 😜, try again');
    } else if (randomNumber > input.value) {
        console.log('Too short 😜, try again');
    } else if (input.value === "") {
        console.log('Please, write a valid number');
    }
}

//Function to count clicks
function countClick() {
    console.log('count');
    clicks += 1;
    counter.innerHTML = clicks;
}


button.addEventListener('click', () => {
    getRandomCompared();
    countClick();
});
