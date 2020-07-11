// cond and circles

let num = 50;

if (num < 49){
 console.log("Неверно!")
} else if(num > 100){
 console.log('Неверно!')
 } else{
  console.log('Верно!')
 }


(num == 50)? console.log('Верно!') : console.log('Неверно!'); // Тернарный оператор


// switch - проверяем каждое и берем подходящее, если ничего нет, то default 

switch (num){
 case 49:
  console.log('Мало!');
  break;
 case 100:
  console.log('Много!');
  break;
 case 80:
  console.log('Too much!');
  break;
 case 50:
  console.log('В точку!');
  break;
 default:
  console.log('Не в этот раз!');
  break;
}

// While 

while(num <= 55){
 console.log(num);
 num++;
}

do {
 console.log(num);
 num--;
}
while(num > 45);


// for 

for (let i = 0; i < 5; i++){
 console.log('Шаг №' + String(i));
}