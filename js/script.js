'use strict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
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

const AppData = function(){
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
};
AppData.prototype.start = function (){
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
};
AppData.prototype.reset = function(){
    [...document.querySelectorAll('section.main input[type="text"]')]
    .forEach( el => el.value='' );
    start.style.display = 'inline';
    cancel.style.display = 'none';
    periodSelect.value = 1;
    document.querySelector('.period-amount').textContent  = 1;

};
AppData.prototype.showResult = function(){
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
};
AppData.prototype.addExpensesBlock = function(){

            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
            expensesItems = document.querySelectorAll('.expenses-items');
            if(expensesItems.length === 3){
                expensesPlus.style.display = 'none';
            }
 };
 AppData.prototype.addIncomeBlock = function(){
    let cloneIncomeItems = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if(incomeItems.length === 3){
        incomePlus.style.display = 'none';
    }
};
AppData.prototype.getIncome = function(){
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
};
AppData.prototype.getExpenses = function(){
    expensesItems.forEach((item)=>{
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
            this.expenses[itemExpenses] = cashExpenses;
        }
    });
};
AppData.prototype.getAddExpenses = function(){
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach((item)=>{
        item = item.trim();
        if(item !== ''){
            this.addExpenses.push(item);
        }
    });
};
AppData.prototype.getAddIncome = function(){
    const _this = this;
    additionalIncomeItem.forEach((item)=>{
        let itemValue = item.value.trim();
        if(itemValue !== ''){
            _this.addIncome.push(itemValue);
        }
    });
};
AppData.prototype.getExpensesMonth = function (){

    for(let key in this.expenses){
        this.expensesMonth += +this.expenses[key];
    }

};
AppData.prototype.getBudget = function () {
    this.budgetMoth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMoth / 30);
};
AppData.prototype.getTargetMonth = function (){
    return targetAmount.value / this.budgetMoth;
};
AppData.prototype.getStatusIncome = function(){
    if(this.budgetDay > 800){
        return (' Высокий уровень дохода');
    } else if ( this.budgetDay > 300){
        return ('Средний уровень дохода');
    } else if ( this.budgetDay > 0){
        return ('  Низкий уровень дохода');
    } else{
        return ('Что то пошло не так!');
    }
};
AppData.prototype.calcPeriod = function (){
 return this.budgetMoth * periodSelect.value;
};
AppData.prototype.eventsListeners = function(x){
    start.addEventListener('click',this.start.bind(this));
    cancel.addEventListener('click', this.reset.bind(this));
    expensesPlus.addEventListener('click', this.addExpensesBlock.bind(this));
    incomePlus.addEventListener('click', this.addIncomeBlock.bind(this));
    periodSelect.addEventListener('change', function(event){
        document.querySelector('.period-amount').textContent  = event.target.value; 
     });
    };
const appData = new AppData();

appData.eventsListeners();


