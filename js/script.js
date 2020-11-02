'use strict';
let todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');
    
const todoData = [
    
];
const render = function() {
    todoList.textContent = '';
    todoCompleted.textContent = '';
    todoData.forEach((item, i) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `
            <span class="text-todo">${item.value}</span>
            <div class="todo-buttons">
                <button class="todo-remove"></button>
                <button class="todo-complete"></button>
            </div>
        `;
        if(item.completed ) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        } 
        const todoRemove = li.querySelector('.todo-remove');
        todoRemove.addEventListener('click', () => {
            delete todoData[i];
            render();
        });

        const todoCompelete = li.querySelector('.todo-complete');
            todoCompelete.addEventListener('click', () => {
                item.completed = !item.completed;
                render();
            });
            
    });
    let json = JSON.stringify(todoData);
    localStorage.setItem('myText' , json);
};


todoControl.addEventListener('submit', function(event){
    
    event.preventDefault();
    JSON.parse(localStorage.getItem('myText'));
    const newTodo = {
        value: headerInput.value,
        completed: false,
    };
    if(headerInput.value !== ''){
    todoData.push(newTodo);
    }
    render();
    headerInput.value = '';

});
render();
