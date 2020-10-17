'use strict';
let money = 10;
let income = 'Фриланс';
let addExpenses ='Интернет, Такси, Телефон' ;
let deposit =  true;
let mission = 100000000;
let period = 5;

const showTypeOf = function (variable){
    return console.log(variable , typeof variable);
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
/*
console.log(addExpenses.length);
console.log(addExpenses.toLowerCase().split(', '));
*/

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

const getExpensesMonth = function(a,b){
    return a + b;
};

console.log(getExpensesMonth(amount1,amount2));
const getAccumulatedMonth = function( cash, cost){
    return cash - cost;
};
let accumulatedMonth = getAccumulatedMonth(money,getExpensesMonth(amount1,amount2));
const getTargetMonth = function (mission, cash){
  return  Math.ceil( mission / cash );
};


console.log('Цель будет достигнута через' + getTargetMonth(mission, accumulatedMonth) + ' месяцев');
let budgetDay = accumulatedMonth/ 30; 
console.log ( Math.floor( budgetDay) );

const  getStatusIncome= function() {
    switch (true) {
        case (budgetDay >= 1200) : 
        return ('У вас высокий доход'); 
        case (1200 > budgetDay > 600) : 
        return('У вас средний доход ') ;
        case (0 <= budgetDay <= 600) : 
        return('У вас доход ниже среднего'); 
        case (budgetDay < 0) : 
        return('что-то пошло не так');
       } 
};

console.log(getStatusIncome());

