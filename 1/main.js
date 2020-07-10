// let budget = +prompt("Ваш бюджет", "0"),
//     name = prompt("Имя вашего магазина", "Имя");

// let mainList = {
//  budget: budget,
//  name: name ,
//  shopGoods: [],
//  employers: {
//  },
//  open: false
// };

// for (let i = 0; i < 3; i++) {
//  mainList.shopGoods[i] = prompt("Что будем продавать?", "Тебя!");
// }

// let amount = +prompt("Сколько будет у вас работников", "0");

// for (let i = 1; i <= amount; i++) {
//  mainList.employers["employNumber" + String(i)] = prompt('Имя вашего работника номер ' + String(i), 'Васька'); 
// }

// answer = prompt("Открываем магазин?", 'нет');
// if (answer != 'нет'){
//  mainList.open = true;
// };

// if (mainList.open == true){
//  alert('Ваш магазин открыыыыт!');
// }else{
//  alert("Всё готово, но магаз закрыт");
// };

// alert('Имя вашего магазина: ' + mainList.name);
// alert('Ваш бюджет на один день: ' + String(mainList.budget / 30));

let num = 33721,
    num3 = 1,
    num2 = String(num).split('');

num2.forEach(element => {
 num3 *= Number(element);
});

alert(num3);
alert(Math.pow(num3, 3));
