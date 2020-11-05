'use strict';
let docBody = document.querySelector('.coll');

function DomElement(selector,height,width,bg,fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg; 
    this.fontSize = fontSize;
} 

DomElement.prototype.ride= function(){
if(this.selector.startsWith('.') === true){
    let div = document.createElement('div');
    div.className = "newDiv";
    docBody.append(div);
    div.style.backgroundColor = this.bg;
    div.style.height = this.height;
    div.style.width = this.width;
    div.style.fontSize = this.fontSize;
    div.textContent= 'hello div';

}else if(this.selector.startsWith('#') === true){
    let p = document.createElement('p');
    p.id = "newId";
    docBody.append(p);
    p.style.backgroundColor = this.bg;
    p.style.height = this.height;
    p.style.width = this.width;
    p.style.fontSize = this.fontSize;
    p.textContent= 'yello pppp';
    
}

};

let newDom =new DomElement('#brat', '10px', '10px', 'blue', '10px');
newDom.ride();