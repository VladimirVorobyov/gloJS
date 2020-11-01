'use strict';
let todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');
    function setCookie(key, value, year, month, day, path, domain, secure){
        let cookieStr = encodeURI(key) + '=' + encodeURI(value);
        if(year) {
            const expires = new Date(year, month-1, day);
            cookieStr += '; expires=' + expires.toGMTString();
        }
        cookieStr += path ? '; path=' + encodeURI(path) : '';
        cookieStr += domain ? '; domain=' + encodeURI(domain) : '';
        cookieStr += secure ? '; secure'  : '';

        document.cookie = cookieStr;
    }
const todoData = [
    
];

const render = function(){
    todoCompleted.textContent = '';
    todoList.textContent = '';
    todoData.forEach(function(item){
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + item.value + '</span>'+
        '<div class="todo-buttons">'+
        '<button class="todo-remove"></button>' +
        '<button class="todo-complete"></button>'+
        '</div>';
        if(item.completed){
            todoCompleted.append(li);
        }else{
            todoList.append(li);
        }
        const btnTodoComplete = li.querySelector('.todo-complete');

        btnTodoComplete.addEventListener('click', function(){
            item.completed = !item.completed;
            render();
        });
        const btnRemove = li.querySelector('.todo-remove');
        btnRemove.addEventListener('click',function(){
            li.remove();
           todoData.pop(item);
            
        });
        localStorage.my = headerInput.value;
    });
};

todoControl.addEventListener('submit', function(event){
    if(headerInput.value !== ''){
    event.preventDefault();
    const newTodo = {
        value: headerInput.value,
        completed: false
    };
    todoData.push(newTodo);
    render();
    headerInput.value = '';
    }
});
render();
