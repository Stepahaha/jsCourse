let open_btn = document.getElementById('open-btn'),
    name_value = document.getElementsByClassName('name-value')[0], 
    budget_value = document.getElementsByClassName('budget-value')[0],        
    goods_value = document.getElementsByClassName('goods-value')[0],
    items_value = document.getElementsByClassName('items-value')[0],
    employers_value = document.getElementsByClassName('employers-value')[0],
    discount_value = document.getElementsByClassName('discount-value')[0],
    isopen_value = document.getElementsByClassName('isopen-value')[0],

    goods_item = document.getElementsByClassName('goods-item'),
    goods_button = document.getElementsByTagName('button')[2],
    budget_btn = document.getElementsByTagName('button')[3],
    employers_btn = document.getElementsByTagName('button')[4],
    choose_item = document.querySelector('.choose-item'),
    time_value = document.querySelector('.time-value'),
    count_budget_value = document.querySelector('.count-budget-value'),
    hire_employers_item = document.querySelectorAll('.hire-employers-item'),
    discount_btn = document.getElementsByClassName('discount-btn')[0],
    get_price_value = document.getElementsByClassName('get-price-value')[0],
    price_value = document.getElementsByClassName('price-value')[0],
    discount_percent = document.getElementsByClassName('discount-percent')[0];
    
let money,  
    price, 
    discount;

open_btn.addEventListener('click', () => {
  setTimeout(start, 2000); // Старт запустится через 2 секунды
});

function start(){
  money = prompt("Ваш бюджет");
  checkNum(money, "Ваш бюджет");

  budget_value.textContent = money;

  name_value.textContent = prompt("Имя вашего магазина", "Имя").toUpperCase();
};

goods_button.addEventListener('click', () => {
  for (let i = 0; i < goods_item.length; i++) {
    let a = goods_item[i].value

    if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50 && isNaN(a) == true){
      console.log('okay!');
      mainList.shopGoods[i] = a; 
      goods_value.textContent = mainList.shopGoods;
      // Validate prompt 
    }
  };  
})

choose_item.addEventListener('change', () => {
  let items = choose_item.value;
  if (isNaN(items) && items != ''){
    mainList.shopItems = items.split(', ');
    mainList.shopItems.sort();
    items_value.textContent = mainList.shopItems; 
  }
});

time_value.addEventListener('change', () => {
  let time = time_value.value;
  if (time < 0){
    alert('Такого не может быть');
    mainList.open = false
   }else if (time > 8 && time < 20){
    alert('Время работать!');
    mainList.open = true;
    }else if (time < 24){
     alert('Время уже позднее - магазин закрыт');
     mainList.open = false;
     }else{
      alert('В сутках только 24 часа');
      mainList.open = false
     };
  if (mainList.open == true){
    isopen_value.style.backgroundColor = 'green';
  } else {
    isopen_value.style.backgroundColor = 'red';
  };
});


budget_btn.addEventListener('click', () => {
  count_budget_value.value = money / 30;
});

employers_btn.addEventListener('click', () => {
  for (let i = 0; i < hire_employers_item.length; i++){
    let employ = hire_employers_item[i].value;
    if (isNaN(employ) && employ != null){
      mainList.employers[i] = employ;
      employers_value.textContent += mainList.employers[i] + ', ';
    }
  };
});


get_price_value.addEventListener('change', () => {
  price = get_price_value.value;
  if (isNaN(price) == false && price != null){
    mainList.price = price;
    price_value.textContent = price;
    if (mainList.discount == true){
      price_value.textContent = price - price * mainList.discount_percent;
    }
  };
});

discount_btn.addEventListener('click', () => {
  mainList.discount = true;
  discount_percent.style.opacity = '1';
  discount_percent.style.transform = 'translateY(0px)';
});

discount_percent.addEventListener('change', () => {
  percent = discount_percent.value;
  if (percent != null && isNaN(percent) == false){
    mainList.discount_percent = percent / 100;
  }
  (mainList.discount == true)? discount_value.style.backgroundColor = 'green' : discount_value.style.backgroundColor = 'red';
  if ( (typeof(mainList.price)) != 'undefined') {
    price_value.textContent = price - price * mainList.discount_percent;
  }
});






function checkNum(variable, quest) {
  while(isNaN(variable) || variable == null || variable == '') {
    variable = prompt(quest, '');
  }
}

const mainList = {
 budget: money,
 ShopName: name,
 shopGoods: [],
 employers: {},
 open: false, 
 discount: false,
 discount_percent: 0,
 price: price,
 shopItems: [],
  makeDiscount: function makeDiscount(){
    if (mainList.discount){
      mainList.price *= 0.8;
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
console.log(mainList.employers)
