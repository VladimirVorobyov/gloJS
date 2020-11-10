'use strict';

class First{
    hello(){
        return console.log("Привет я метод родителя!");
    }
}

class Second extends First {
 hello(){
    super.hello();
    console.log("А я наследуемый метод!");
 }
}

const car2 = new Second();
car2.hello();
