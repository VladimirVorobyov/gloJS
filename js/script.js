'use strict';
//задача номер 1 
/*

const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
}
const a = document.getElementById('a'),
      b = document.getElementById('b'),
      sum =document.getElementById('sum'),
      mult=document.getElementById('mult'),
      res = document.getElementById('res');

class Calculator {

  getSum(){
    res.value = Number(a.value) + Number(b.value);
  }

  getMult(){
    res.value= Number(a.value) * Number(b.value);
  }

  show(){
    sum.addEventListener('click',this.getSum.bind(this)) ;
    mult.addEventListener('click', this.getMult.bind(this));

  }
}

const appData = new Calculator();
appData.show();
*/
// задача номер 2 
function getResult(x,y){
  let result,
      sum1 = Math.pow(x, y),
      output = [],
      sNumber = sum1.toString();

for (let i = 0 ; i < sNumber.length; i++) {
    output.push(+sNumber.charAt(i));
}
result = output.reduce((acc,item)=>acc + item,0);
return result;
}

console.log(getResult(4, 8));
