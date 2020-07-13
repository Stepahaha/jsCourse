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
}

// start();

let mainList = {
 budget: money,
 ShopName: name,
 shopGoods: [],
 employers: {},
 open: false, 
 discount: discount,
 price: price,
 shopItems: [], 
 chooseGoods: function chooseGoods(){
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
  },
  getEmp: function getEmp(){
    for(let i = 1; i < 5; i++){
      let employ = prompt('Как зовут работника?');
      while (isNaN(employ) == false|| employ == null || employ == ''){
        employ = prompt('Как зовут работника?');
      }
      mainList.employers[i] = employ;
    }
  },
  makeDiscount: function makeDiscount(){
    if (mainList.discount){
      mainList.price *= 0.8;
    }
  },
  workTime: function workTime(time){
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
  },
  calcBudget: function calcBudget(money){
    alert('Ваш бюджет на один день: ' + String(Number(money) / 30));
  },
  chooseShopItems: function chooseShopItems() {
    let items = prompt('Перечислите через запятую товары', '');
    while (isNaN(items) == false || items == null || items == ''){
      items = prompt('Перечислите через запятую товары', ''); 
    }
    mainList.shopItems = items.split(',');
    mainList.shopItems.push(prompt('Добавь ещё один', ''));
    mainList.shopItems.sort();  
   },
  showCatalog: function showCatalog() {
    alert('У нас вы можете приобрести:')
    this.shopItems.forEach(element => {
      alert(element);
    });
  },
  showInfo: function showInfo() {
    alert('Наш магазин включает в себя - ')
    for( let key in mainList ) {
      alert(key);
    }
  }
};



console.log(mainList)




// let num = 33721,
//     num3 = 1,
//     num2 = String(num).split('');

// num2.forEach(element => {
//  num3 *= Number(element);
// });

// alert(num3);
// alert(Math.pow(num3, 3));
