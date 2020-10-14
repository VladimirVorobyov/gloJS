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
console.log('Цель заработать' + mission + 'рублей');
let miniAddExpenes = addExpenses.toLowerCase();
console.log(miniAddExpenes);
let arrayExpenes = [miniAddExpenes.substring(0,8), miniAddExpenes.substring(10,15),miniAddExpenes.substring(17,24)];
console.log(arrayExpenes);
let budgetDay = money / 30;
console.log(budgetDay);


