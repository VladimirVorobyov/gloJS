'use strict';

let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    incomeItems = document.querySelectorAll('.income-items'),
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
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItem = document.querySelectorAll('.income-items');

    let appData = {
        budget : 0,
        budgetDay : 0, 
        budgetMoth : 0,
        income: {},
        incomeMonth: 0,
        addIncome : [],
        expenses : {},
        expensesMonth : 0,
        addExpenses: [],
        deposit: false,
        parcentDeposit: 0,
        moneyDeposit: 0,
        start: function() {
            if(salaryAmout.value !== ''){    
            appData.budget = +salaryAmout.value;
            appData.getExpenses();
            appData.getIncome();
            appData.getExpensesMonth();
            appData.getAddExpenses();
            appData.getAddIncome();
            appData.getBudget();
            appData.showResult();
            }
        },
        showResult: function(){
            budgetMonthValue.value = appData.budgetMoth;
            budgetDayValue.value = appData.budgetDay;
            expensesMonthValue.value = appData.expensesMonth;
            additionalExpensesValue.value = appData.addExpenses.join(', ');
            additionalIncomeValue.value = appData.addIncome.join(', ');
       
            targetMonthValue.value = Math.ceil(appData.getTargetMonth());
            periodSelect.addEventListener('change', function(event){
                incomePeriodValue.value = appData.budgetMoth * event.target.value; 
             });
            

            
        },
        addExpensesBlock: function(){

            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
            expensesItems = document.querySelectorAll('.expenses-items');
            if(expensesItems.length === 3){
                expensesPlus.style.display = 'none';
            }
        },
        addIncomeBlock: function(){
            let cloneIncomeItems = incomeItems[0].cloneNode(true);
            incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
            incomeItems = document.querySelectorAll('.income-items');
            if(incomeItems.length === 3){
                incomePlus.style.display = 'none';
            }
        },
        getIncome: function(){
            incomeItems.forEach(function(item){
                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
                if( itemIncome !== '' && cashIncome !== ''){
                    appData.income[itemIncome]= cashIncome;
                }
                for (let key in appData.income){
                    appData.incomeMonth += +appData.income[key];
                }
            });
            
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
            
        },
        getInfodeposit: function (){

        },
        getExpensesMonth: function (){

                for(let key in appData.expenses){
                    appData.expensesMonth += +appData.expenses[key];
                }

        },
        getBudget: function () {
                appData.budgetMoth = appData.budget + appData.incomeMonth - appData.expensesMonth;
                console.log(appData.budgetMoth);
                appData.budgetDay = Math.floor(appData.budgetMoth / 30);
        },
        getTargetMonth: function (){
                return targetAmount.value / appData.budgetMoth;
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
             return appData.budgetMoth * periodSelect.value;
        }
    };
    start.addEventListener('click', appData.start);
    expensesPlus.addEventListener('click', appData.addExpensesBlock);
    incomePlus.addEventListener('click', appData.addIncomeBlock);
    periodSelect.addEventListener('change', function(event){
        document.querySelector('.period-amount').textContent  = event.target.value; 
     });

   if(appData.getTargetMonth() > 0){
    console.log('Цель будет достигнута за: ' + Math.ceil(appData.getTargetMonth()) + ' месяцев');
   } else {
       console.log('Цель не будет достигнута');
   }
          