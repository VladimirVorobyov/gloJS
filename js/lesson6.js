'use strict';
//если как игра, я бы делал так 
 let getRandom = function(min, max){
     return Math.floor(Math.random() * (max -min)) + min;
 };
 let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let numberRandom = getRandom(0,100);
console.log(numberRandom);
 function gameNumber(){
    let userNumber = prompt('Угадай число от 0 до 100');
 if(userNumber === null ){
   alert('игра окончена');
   gameNumber();
 } else if(userNumber < numberRandom){
    alert('Загаданое число больше');
    gameNumber();
 }else if (!isNumber(userNumber)){
    alert('введи число!');
    gameNumber();
 }else if(userNumber > numberRandom){
    alert('Загаданое число меньше');
    gameNumber();
 }else{
   alert('Ура, вы угадали');
 }
}
gameNumber();
