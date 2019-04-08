'use strict';

const button = document.querySelector('.button');
const input = document.querySelector('.input');


//Function to get random number 0-100 and compare with input value
function getRandomCompared() {
    const randomNumber = Math.ceil(Math.random() * (100-1) + 1);
    console.log(randomNumber);
    console.log(input.value);
    if (randomNumber === input.value) {
        console.log('You win!!');
    } else if (randomNumber < input.value) {
        console.log('Too hight 😜');
    } else if (randomNumber > input.value) {
        console.log('Too short 😜');
    } else if (input.value === "") {
        console.log('Please, write a valid number');
    }
}


button.addEventListener('click', getRandomCompared);
