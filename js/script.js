'use strict';
let money = 10;
let income = 'Фриланс';
let addExpenses ='Интернет, Такси, Телефон' ;
let deposit =  true;
let mission = 100;
let period = 5;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = money / 30;
/*
let num = 266219;
let numString = num.toString();
let sumNumber = numString.substr(0,1) * numString.substr(1,1) * numString.substr(2,1) * numString.substr(3,1) * numString.substr(4,1) * numString.substr(5,1);
let sumNumPow = sumNumber ** 3;
let sumConsole = sumNumPow.toString();
console.log(sumConsole.substr(0,2));*/

money= +prompt('Ваш месячный доход?');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Восколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Восколько это обойдется?');
let budgetMonth = amount1 + amount2;
console.log(budgetMonth);

console.log( Math.ceil(mission/(money - budgetMonth)));
budgetDay = Math.floor((money - budgetMonth) / 30);
switch (true) {
 case (budgetDay >= 1200) : 
 console.log('У вас высокий доход'); 
 break;
 case (1200 > budgetDay > 600) : 
 console.log('У вас средний доход ') ;
 break;
 case (0 <= budgetDay <= 600) : 
 console.log('У вас доход ниже среднего'); 
 break;
 case (budgetDay < 0) : 
 console.log('что-то пошло не так'); 
 break;
}
