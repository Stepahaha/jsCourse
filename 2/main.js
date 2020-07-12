// // cond and circles

// let num = 50;

// if (num < 49){
//  console.log("Неверно!")
// } else if(num > 100){
//  console.log('Неверно!')
//  } else{
//   console.log('Верно!')
//  }


// (num == 50)? console.log('Верно!') : console.log('Неверно!'); // Тернарный оператор


// // switch - проверяем каждое и берем подходящее, если ничего нет, то default 

// switch (num){
//  case 49:
//   console.log('Мало!');
//   break;
//  case 100:
//   console.log('Много!');
//   break;
//  case 80:
//   console.log('Too much!');
//   break;
//  case 50:
//   console.log('В точку!');
//   break;
//  default:
//   console.log('Не в этот раз!');
//   break;
// }

// // While 

// while(num <= 55){
//  console.log(num);
//  num++;
// }

// do {
//  console.log(num);
//  num--;
// }
// while(num > 45);


// // for 

// for (let i = 0; i < 5; i++){
//  console.log('Шаг №' + String(i));
// }


// Hard tasks 

// let x = 5; 
// alert(++x) = 6, так как сначала добавляем еденицу, потом выводим на экран
// alert(x++) = 5, так как сначала вывод, потом добавл единицу 

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    today = 'Суббота';
for (let i = 0; i < 7; i++){
  let todayIndex = week.indexOf(today); // index in week with todays day of week
  if (i == 5 || i == 6){
    if (i == todayIndex){ // if today in weekend
      document.write('<b><i>' + week[i] + '</i></b><br>');
    } else{ // if just weekends
      document.write('<b>' + week[i] + '</b><br>')
    }
  } else if (i == todayIndex){ // if today
    document.write('<i>' + week[i] + '</i><br>')
  } else{ // simple day
    document.write(week[i] + '<br>')
  }
};



arr = ['3377', '4324', '7998', '2314123', '778987', '33223', '2233'];
arr.forEach(num => {
  if (num[0] == 3 || num[0] == 7){
    console.log(num);
  }
});

// commit