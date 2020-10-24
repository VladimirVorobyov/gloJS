let bookJs = document.querySelectorAll('.book');
let books = document.querySelector('.books');
books.prepend(bookJs[1]);
books.append(bookJs[2]);
bookJs[3].before(bookJs[4]);
document.body.setAttribute('style','background-image: url(./image/you-dont-know-js.jpg)');
document.getElementsByTagName('a')[2].textContent = "Книга 3. this и Прототипы Объектов";
document.querySelector('.adv').remove();
let allUl = document.querySelectorAll('ul'),
 allUlLi = allUl[1].querySelectorAll('li'),
 allUlLi2 = allUl[4].querySelectorAll('li'),
 allUlLi6 = allUl[5].querySelectorAll('li');
 allUlLi[2].before(allUlLi[3]);
 allUlLi[2].before(allUlLi[6]);
 allUlLi[2].before(allUlLi[8]);
 allUlLi[2].before(allUlLi[4]);
 allUlLi[2].before(allUlLi[5]);
 allUlLi[2].before(allUlLi[7]);
 allUlLi[2].before(allUlLi[9]);
 allUlLi2[2].before(allUlLi2[9]);
 allUl[4].append(allUlLi2[2]);
 allUlLi2[5].before(allUlLi2[2]);
 allUlLi2[8].before(allUlLi2[5]);
let newElement = allUlLi2[2].cloneNode();
newElement.textContent = 'Глава 8: За пределами ES6';
allUl[5].append(newElement);
allUl[5].append(allUlLi6[9]);
