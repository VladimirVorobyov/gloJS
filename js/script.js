'use strict';

let  expensesItems = document.querySelectorAll('.expenses-items'),
     incomeItems = document.querySelectorAll('.income-items'),
     incomeItem = document.querySelectorAll('.income-items');

const start = document.getElementById('start'),
     cancel = document.getElementById('cancel'),
     btnPlus = document.getElementsByTagName('button'),
     incomePlus = btnPlus[0],
     expensesPlus = btnPlus[1],
     additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
     depositCheck = document.querySelector('#deposit-check'),
     budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
     budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
     expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
     additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
     additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
     incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
     targetMonthValue = document.getElementsByClassName('target_month-value')[0],
     salaryAmout = document.querySelector('.salary-amount'),
     incomeTitle = document.querySelector('.income-title'),
     incomeAmount = document.querySelector('.income-amount'),
     expensesTitle = document.querySelector('.expenses-title'),
     additionalExpenses = document.querySelector('.additional_expenses'),
     periodSelect = document.querySelector('.period-select'),
     additionalExpensesItem = document.querySelector('.additional_expenses-item'),
     targetAmount = document.querySelector('.target-amount');

class AppData {
    constructor(){
        this.budget =0;
        this.budgetDay = 0; 
        this.budgetMoth = 0;
        this.income = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.expensesMonth = 0;
        this.addExpenses = [];
        this.deposit = false;
        this.parcentDeposit = 0;
        this.moneyDeposit = 0;
    }
    start () {
        if (salaryAmout.value !== ''){    
            this.budget = +salaryAmout.value;
            this.getExpenses();
            this.getIncome();
            this.getExpensesMonth();
            this.getAddExpenses();
            this.getAddIncome();
            this.getBudget();
            this.showResult();
            start.style.display = 'none';
            cancel.style.display = 'inline';
            }
    }
    reset () {
        [...document.querySelectorAll('section.main input[type="text"]')]
        .forEach( el => el.value='' );
        start.style.display = 'inline';
        cancel.style.display = 'none';
        periodSelect.value = 1;
        document.querySelector('.period-amount').textContent  = 1;
    }
    showResult (){
        const _this = this;
        budgetMonthValue.value = this.budgetMoth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        periodSelect.addEventListener('change',(event)=>{
            incomePeriodValue.value = _this.budgetMoth * event.target.value; 
         });
         incomePeriodValue.value = _this.budgetMoth * periodSelect.value;
    }

    addExpensesBlock () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3){
        expensesPlus.style.display = 'none';
    }
    }

    addIncomeBlock (){
    let cloneIncomeItems = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if(incomeItems.length === 3){
        incomePlus.style.display = 'none';
    }
    }


    getIncome (){
        const _this = this;
        incomeItems.forEach((item)=>{
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if( itemIncome !== '' && cashIncome !== ''){
                _this.income[itemIncome]= cashIncome;
            }
            for (let key in _this.income){
                _this.incomeMonth += +_this.income[key];
            }
        });
    }
    getExpenses (){
        expensesItems.forEach((item)=>{
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                this.expenses[itemExpenses] = cashExpenses;
            }
         });
    }
    getAddExpenses (){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach((item)=>{
            item = item.trim();
            if(item !== ''){
                this.addExpenses.push(item);
            }
        });
    }
    getAddIncome (){
        const _this = this;
        additionalIncomeItem.forEach((item)=>{
            let itemValue = item.value.trim();
             if(itemValue !== ''){
                _this.addIncome.push(itemValue);
             }
        });
    }
    getExpensesMonth (){
        for(let key in this.expenses){
            this.expensesMonth += +this.expenses[key];
        }

    }
    getBudget () {
        this.budgetMoth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMoth / 30);
    }

    getTargetMonth () {
    return targetAmount.value / this.budgetMoth;
    }

    getStatusIncome (){
        if(this.budgetDay > 800){
            return (' Высокий уровень дохода');
        } else if ( this.budgetDay > 300){
            return ('Средний уровень дохода');
        } else if ( this.budgetDay > 0){
            return ('  Низкий уровень дохода');
        } else{
            return ('Что то пошло не так!');
        }
    }
    calcPeriod (){
        return this.budgetMoth * periodSelect.value;
    }
    eventsListeners(){
        start.addEventListener('click',this.start.bind(this));
        cancel.addEventListener('click', this.reset.bind(this));
        expensesPlus.addEventListener('click', this.addExpensesBlock.bind(this));
        incomePlus.addEventListener('click', this.addIncomeBlock.bind(this));
        periodSelect.addEventListener('change', function(event){
        document.querySelector('.period-amount').textContent  = event.target.value; 
        });
    }
}

const appData = new AppData();

appData.eventsListeners();



