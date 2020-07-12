// let num = 5 // Глобальная переменнная

// function myFirstFunc(parametr){  // Называем функцию и даем название параметру 
//  alert(parametr); // Работаем с параметром
//  let x = 5; // Локальная 
//  num = 10; // Изменяем где хотим  
// }

// myFirstFunc('Some text'); // Вызов ф-ии
// // alert(x); // Даст ошибку, тк переменная в ф-ии не глобальная
// alert(num); // Даст 10, если вызвать ф-ию


// function calc(a, b){
//  return a + b;
// }  // вызвать можно до объявления

// console.log(calc(4, 5));
// console.log(calc(4, 23));


// let culcNew = function(a, b){
//  return a * b;
// } // Вызвать можно только после объявления

// let arrowCalc = (a, b) => a - b // стрелочная ф-я
// alert(arrowCalc(5, 3));

// // Методы и с-ва

// let text = 'text',
//     y = 123.3,
//     z = '12.3pxds'

// console.log(text.length); // Св-во длины
// console.log(text.toUpperCase()); // Метод, для получения заглавных букв 
// console.log(Math.round(y)); // Метод округления

// console.log(parseInt(z)); // '12.3pxds' => 12 (до точки)
// console.log(parseFloat(z)); // '12.3pxds' => 12.3 (до букв)


let f = '23',
    h = 'er';

console.log(typeof(f));
console.log(typeof(parseInt(f)));
console.log(typeof(h));
console.log(typeof(parseInt(h)));
console.log(parseInt(h));