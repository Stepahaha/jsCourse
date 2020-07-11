let money = +prompt("Ваш бюджет", "0"),
    name = prompt("Имя вашего магазина", "Имя"),
    time = +prompt("Сколько время сейчас?", 9);

let mainList = {
 budget: money,
 ShopName: name ,
 shopGoods: [],
 employers: {},
 open: false
};

for (let i = 0; i < 5; i++) {
 let a = prompt("Что будем продавать?");
 if ((typeof(a) != Object && typeof(a) === 'string') && (a.length < 50 && a != '')){
   console.log('okay!');
   mainList.shopGoods[i] = a; 
   // Validate promt 
 } else {
   // Get correct promt 
   mainList.shopGoods[i] = 0
   while (mainList.shopGoods[i] == 0){
    let a = prompt("Что будем продавать?");
    if ((typeof(a) != Object && typeof(a) === 'string') && (a.length < 50 && a != '')){
      console.log('okay!');
      mainList.shopGoods[i] = a;
    };
   };
 }
};

alert('Ваш бюджет на один день: ' + String(mainList.budget / 30));
console.log(mainList)

if (time < 0){
 console.log('Такого не может быть');
}else if (time > 8 && time < 20){
 console.log('Время работать!');
 mainList.open = true;
 }else if (time < 24){
  console.log('Время уже позднее - магазин закрыт');
  mainList.open = false;
  }else{
   console.log('В сутках только 24 часа');
  }





// let num = 33721,
//     num3 = 1,
//     num2 = String(num).split('');

// num2.forEach(element => {
//  num3 *= Number(element);
// });

// alert(num3);
// alert(Math.pow(num3, 3));
