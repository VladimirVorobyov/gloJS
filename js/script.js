'use strict';
let buttonStart = document.getElementById('start'),
    buttonplus0 = document.getElementsByTagName('button')[0],
    buttonplus1 = document.getElementsByTagName('button')[1],
    depositCheck = document.getElementById('deposit-check'),
    incomeItem = document.querySelectorAll('.additional_income-item'),
    budgetDayValue = document.getElementsByClassName('budget_day-value'),
    budgetMonthValue = document.getElementsByClassName('budget_month-value'),
    expensesMonthValue = document.getElementsByClassName('expenses_month-value'),
    additionalIncomeValue = document.getElementsByClassName('additional_income-value'),
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value'),
    incomePeriodValue = document.getElementsByClassName('income_period-value'),
    targetMonthValue = document.getElementsByClassName('target_month-value'),
    salaryAmount= document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount =document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItem = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent =document.querySelector('.deposit-percent'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select');
    

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 150000,
    period: 3,
    start : function () {
        if(salaryAmount.value === ''){
            alert('ошибка поля, месячный доход должен быть заполнен');
        }
        appData.budget =  salaryAmount.value;
        console.log(appData.budget);
        appData.getExpenses();
        appData.getExpensesMonth();
        appData.getBudget();
        appData.getTargetMonth();
        appData.getStatusIncome();
        appData.getInfoDeposit();
        appData.calcSavedMonth();
        appData.showResult();
    },
    showResult : function(){
        console.log(budgetDayValue);
        budgetDayValue.value = appData.budgetDay;
        budgetMonthValue.value = appData.budgetMonth;
        expensesMonthValue.placeholder = appData.expensesMonth;
        
    },
    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItem[0].cloneNode(true);
        expensesItem[0].parentNode.insertBefore(cloneExpensesItem,buttonplus1);
        expensesItem = document.querySelectorAll('.expenses-items');
        if(expensesItem.length === 3){
            buttonplus1.style.display = 'none';
        }
    },
    getExpenses : function(){
        expensesItem.forEach(function(item){
           let itemExpenses = item.querySelector('.expenses-title').value;
           let cashExpenses = item.querySelector('.expenses-amount').value;
           if(itemExpenses !== '' && cashExpenses !== ''){
               appData.expenses[itemExpenses]= +cashExpenses;
           }
        });

    },
    asking: function () {
        if (confirm('Если у вас дополнительный источник заработка?')) {
            let itemIncome,
                cashIncome;
            do {
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            } while (isNumber(itemIncome) || itemIncome === null);
            do {
                cashIncome = +prompt('Сколько в месц вы на этом зарабатываете?', 10000);
            } while (!isNumber(cashIncome) || cashIncome === 0);
            appData.income[itemIncome] = cashIncome;
        }
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++) {
            let num,
                expenses;
            do {
                expenses = prompt('Введите обязательную статью расходов?', 'Квартплата');
            } while (isNumber(expenses) || expenses === null);
            do {
                num = +prompt('Во сколько это обойдется?', '2000');
            } while (!isNumber(num) || num === 0);
            appData.expenses[expenses] = num;
        }
    },
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
        console.log('Обязательных расходов за месяц ', appData.expensesMonth);
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        appData.getTargetMonth = Math.ceil(appData.mission / appData.budgetMonth);
        if (appData.getTargetMonth > 0) {
            console.log('Цель будет достигнута за: ' + appData.getTargetMonth + ' месяцев');
        } else {
            console.log('Цель не будет достигнута!');
        }
    },
    getStatusIncome: function () {
        if (appData.budgetDay > 1200) {
            console.log('У вас высокий уровень дохода!');
        } else if (appData.budgetDay > 600 && appData.budgetDay <= 1200) {
            console.log('У вас средний уровень дохода.');
        } else if (appData.budgetDay <= 600 && appData.budgetDay >= 1) {
            console.log('К сожалению у вас уровень дохода ниже среднего.');
        }
    },
    getInfoDeposit: function () {
        if (appData.deposit) {
            do {
                appData.percentDeposit = +prompt('Какой годовой процент?', '10');
            } while (!isNumber(appData.percentDeposit) || appData.percentDeposit === 0);
            do {
                appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
            } while (!isNumber(appData.moneyDeposit) || appData.moneyDeposit === 0);
        }
    },
    calcSavedMonth: function () {
        return appData.budgetMonth * appData.period;
    }
};
buttonStart.addEventListener('click', appData.start);
buttonplus1.addEventListener('click', appData.addExpensesBlock);