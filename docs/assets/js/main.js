"use strict";const button=document.querySelector(".button"),input=document.querySelector(".input"),counter=document.querySelector(".counter"),result=document.querySelector(".result"),reset=document.querySelector(".reset");let randomNumberSelected=getRandomNumber(100),clicks=0;function getRandomNumber(e){return Math.ceil(Math.random()*e)}function getRandomCompared(){let e=parseInt(input.value);randomNumberSelected===e?printResult(result,"You win!! 🎉"):e>100?printResult(result,"Can't be bigger than 100"):e<0?printResult(result,"Can't be smaller than 0"):randomNumberSelected<e?(printResult(result,"Too hight 🌡, try again"),add1Counter()):randomNumberSelected>e?(printResult(result,"Too short ☃, try again"),add1Counter()):printResult(result,"Please, enter a valid number")}function printResult(e,t){e.innerHTML=t}function add1Counter(){clicks+=1,counter.innerHTML=clicks}function pressEnter(e){13==e.keyCode&&getRandomCompared()}function resetGame(){input.value="",clicks=0,counter.innerHTML=clicks,result.innerHTML="Escribe un número y dale a <em>Prueba</em>",randomNumberSelected=getRandomNumber(100)}counter.innerHTML=clicks,button.addEventListener("click",getRandomCompared),window.addEventListener("keydown",pressEnter),reset.addEventListener("click",resetGame);