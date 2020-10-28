'use strict';

let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_moth-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatetdMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmout = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    periodSelect = document.querySelector('.period-select'),
    additionalExpensesItem = document.querySelector('.additional-expenses-item');


    let appData = {
        budget : 0,
        budgetDay : 0, 
        budgetMoth : 0,
        income: {},
        addIncome : [],
        expenses : {},
        expensesMonth : 0,
        addExpenses: [],
        deposit: false,
        parcentDeposit: 0,
        moneyDeposit: 0,
        period: 3, 
        start: function() {

            if(salaryAmout.value === ''){
                alert('Ошибка, поле "Месячный доход" должно быть заполнено');
                return;
            }
            appData.budget = salaryAmout.value;

            appData.getExpenses();
            
            appData.getExpensesMonth();
            appData.getBudget();
            appData.getAddExpenses();
            appData.getAddIncome();
            appData.showResult();
        },
        showResult: function(){
            budgetMonthValue.value = appData.budgetMoth;
            budgetDayValue.value = appData.budgetDay;
            expensesMonthValue.value = appData.addExpensesMonth;
            additionalExpensesValue.value = appData.addExpenses.join(', ');
            additionalIncomeValue.value = appData.addIncome.join(', ');
        },
        addExpensesBlock: function(){

            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
            expensesItems = document.querySelectorAll('.expenses-items');
            if(expensesItems.length === 3){
                expensesPlus.style.display = 'none';
            }
        },
        getExpenses: function(){
            expensesItems.forEach(function(item){
                let itemExpenses = item.querySelector('.expenses-title').value;
                let cashExpenses = item.querySelector('.expenses-amount').value;
                if(itemExpenses !== '' && cashExpenses !== ''){
                    appData.expenses[itemExpenses] = cashExpenses;
                }
            });
        },
        getAddExpenses: function(){
            let addExpenses = additionalExpensesItem.value.split(',');
            addExpenses.forEach(function(item){
                item = item.trim();
                if(item !== ''){
                    appData.addExpenses.push(item);
                }
            });
        },
        getAddIncome: function(){
            additionalIncomeItem.forEach(function(item){
                let itemValue = item.value.trim();
                if(itemValue !== ''){
                    appData.addIncome.push(itemValue);
                }
            });
        },
        asking:function (){
            if(confirm('Есть ли у вас дополнительный источник заработка?')) {
                let itemIncome = prompt('Какой?', 'Таксую');
                let cashIncome =  prompt('Сколько в месяц зарабатываешь на этом?' , 10000);
                appData.income[itemIncome]= cashIncome;
            }
            let addExpenses =prompt('Перечислите расходы через запятую?', 'Обувь, шорты');
            appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ');
            
        },
        getInfodeposit: function (){
             appData.deposit = confirm('Есть ли у вас депозит в банке?');
             if(appData.deposit){
                 appData.percentDeposit = prompt('Какой годовой процент?', 10);
                 appData.moneyDeposit = prompt ('Какая сумма', 1000000);
                }
        },
        getExpensesMonth: function (){

                for(let key in appData.expenses){
                    appData.expensesMonth += +appData.expenses[key];
                }

        },
        getBudget: function () {
                appData.budgetMoth = appData.budget - appData.expensesMonth;
                appData.budgetDay = appData.budgetMoth / 30;
        },
        getTargetMonth: function (){
                return appData.mission / appData.budgetMoth;
        },
        getStatusIncome: function(){
                if(appData.budgetDay > 800){
                    return (' Высокий уровень дохода');
                } else if ( appData.budgetDay > 300){
                    return ('Средний уровень дохода');
                } else if ( appData.budgetDay > 0){
                    return ('  Низкий уровень дохода');
                } else{
                    return ('Что то пошло не так!');
                }
        },
        calcPeriod : function (){
             return appData.budgetMonth * appData.period;
        }
    };
    start.addEventListener('click', appData.start);
    expensesPlus.addEventListener('click', appData.addExpensesBlock);
   if(appData.getTargetMonth() > 0){
    console.log('Цель будет достигнута за: ' + Math.ceil(appData.getTargetMonth()) + ' месяцев');
   } else {
       console.log('Цель не будет достигнута');
   }
          