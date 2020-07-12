let money, 
    name, 
    time, 
    price, 
    discount;


    
function start(){
  money = prompt("Ваш бюджет");
  while(isNaN(money) || money == null || money == ''){
    money = prompt("Ваш бюджет");
  }
  name = prompt("Имя вашего магазина", "Имя").toUpperCase();
  price = prompt("Сколько будут стоить товары?");
  while(isNaN(price) || price == null || price == ''){
    price = prompt("Сколько будут стоить товары?");
  }
  time = +prompt("Сколько время сейчас?", 9);
  discount = confirm('Нужна скидка?');
  if(discount == true){
    price *= 0.8;
  };
}

start();

let mainList = {
 budget: money,
 ShopName: name,
 shopGoods: [],
 employers: {},
 open: false, 
 discount: discount,
 price: price
};

function chooseGoods(){
  for (let i = 0; i < 5; i++) {
    let a = prompt("Что будем продавать?");
    if (isNaN(a) == true && a.length < 50 && a != '' && a != null){
      console.log('okay!');
      mainList.shopGoods[i] = a; 
      // Validate prompt 
    } else { // get correct prompt
      i -= 1;
    }
   };  
}



function getEmp(){
  for(let i = 1; i < 5; i++){
    let employ = prompt('Как зовут работника?');
    while (isNaN(employ) == false|| employ == null || employ == ''){
      employ = prompt('Как зовут работника?');
    }
    mainList.employers[i] = employ;
  }
}




function calcBudget(money){
  alert('Ваш бюджет на один день: ' + String(Number(money) / 30));
}



console.log(mainList)

function workTime(time){
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
}

chooseGoods();
getEmp();
calcBudget(mainList.budget);
workTime(time);




// let num = 33721,
//     num3 = 1,
//     num2 = String(num).split('');

// num2.forEach(element => {
//  num3 *= Number(element);
// });

// alert(num3);
// alert(Math.pow(num3, 3));
