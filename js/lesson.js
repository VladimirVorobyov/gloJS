let lang = prompt('en/ru');
/*switch(lang){
    case 'ru':
        console.log('понедельник,вторник, среда, четверг, пятница, суббота, воскресенье');
        break;
    case 'en':
        console.log(' Sunday , Monday , Tuesday, Wednesday, Thursday, Friday, Saturday');
    break;
}
*/
/*if ( lang === 'ru'){
    console.log('понедельник,вторник, среда, четверг, пятница, суббота, воскресенье');
} else {
    console.log(' Sunday , Monday , Tuesday, Wednesday, Thursday, Friday, Saturday');
}
*/
let lanArray = [{'ru':'понедельник,вторник, среда, четверг, пятница, суббота, воскресенье'}, 
{'en':'Sunday , Monday , Tuesday, Wednesday, Thursday, Friday, Saturday'}];
let result = lang === 'ru' ? lanArray[0]:lanArray[1];
console.log(result);

let namePerson = prompt('ты кто');
let boss = namePerson === 'Артем' ? console.log('Директор'):
namePerson === 'Максим' ? console.log('преподаватель'):
console.log('студент');
