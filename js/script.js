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
let miniAddExpenes = addExpenses.toLowerCase();
console.log(miniAddExpenes);

console.log(miniAddExpenes.split(', '));
let budgetDay = money / 30;
console.log(budgetDay);

let num = 266219;
let numString = num.toString();
let sumNumber = numString.substr(0,1) * numString.substr(1,1) * numString.substr(2,1) * numString.substr(3,1) * numString.substr(4,1) * numString.substr(5,1);
let sumNumPow = sumNumber ** 3;
let sumConsole = sumNumPow.toString();
console.log(sumConsole.substr(0,2));


