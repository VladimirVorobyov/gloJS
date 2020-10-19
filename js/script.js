'use strict';
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let money ;
let start = function(){
    do { 
        money= +prompt('Ваш месячный доход?');
    }
    while ( !isNumber(money));
    return money;
};

let expenses1,expenses2;
let Numbersum = function (a){
    do {
        a = prompt('Восколько это обойдется?');
        }
        while(!isNumber(a));
        return a;
};


let appData = {
    income: {},
    addIncome: [],
    expenses : {
    
    },
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    asking: function (){
        appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть у вас депозит в банке?');
        let amount = 0;
        for (let i = 0; i < 2; i++) {
            appData.expenses[prompt('Введите обязательную статью расходов?')] = + Numbersum(amount);   
        }
    },
    budget: start(),
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth : function(){
    let sum =0;
    for(let key in appData.expenses){
     sum += appData.expenses[key];
    }
    return sum;
     },
    getBudget : function( cash, cost){
        return cash - cost;
    },
    getTargetMonth : function (mission, cash){
        return  Math.ceil( mission / cash );
      },
    getStatusIncome : function() {
        switch (true) {
            case (appData.budgetDay >= 1200) : 
            return ('У вас высокий доход'); 
            case (1200 > appData.budgetDay > 600) : 
            return('У вас средний доход ') ;
            case (0 <= appData.budgetDay <= 600) : 
            return('У вас доход ниже среднего'); 
            case (appData.budgetDay < 0) : 
            return('что-то пошло не так');
           } 
    }
};
appData.asking();
appData.budgetMonth = appData.getBudget(appData.budget,appData.getExpensesMonth());
appData.budgetDay = appData.budgetMonth/ 30; 

if( appData.getTargetMonth(appData.mission, appData.budgetMonth) > 0){
    console.log('Цель будет достигнута через' + appData.getTargetMonth(appData.mission, appData.budgetMonth) + ' месяцев');
} else {
    console.log('Цель не будет достигнута ');
}
console.log('расходы за месяц ' + appData.getExpensesMonth());
console.log ( Math.floor( appData.budgetDay) );
console.log(appData.getStatusIncome());
console.log(appData.expenses);