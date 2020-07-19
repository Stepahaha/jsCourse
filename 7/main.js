// let timerID = setTimeout(func, delay); // (ф-я, которую надо выполнить, дилэй - задержка, с которой выполняют) - начинает func через delay времени

// let intetvalId = setInterval(func, delay); // (Тоже самое) - эта ф-я повторяет параметр func через delay времени


// clearTimeout(timerID); // остановка таймера
// clearInterval(intetvalId); // остановка повторений 





// let newTimerId = setTimeout(log, 2000);


// function log() {
//  console.log('Hello!');
//  newTimerId = setTimeout(log, 2000); // Ф-я вызывает сама себя через 2 секунды после завершения 
// }


let btn = document.querySelector(".animate");

function myAnimate() {
 let elem = document.querySelector(".box"),
     pos = 0, // Позиция блока
     id = setInterval(frame, 5); // функция фрэйм (Будет перемещать объект) выполняется чере каждые 0,01 сек

     function frame() {
      if (pos == 300){
       clearInterval(id);
      } else {
       pos++;
       elem.style.top = pos + 'px';
       elem.style.left = pos + 'px';
      }
      }
     };

btn.addEventListener('click', myAnimate);


let btns = document.getElementsByTagName('button'),
    btn_block = document.querySelector('.btn-block');


// Задача - жмешь на кнопку, любую главное, чтобы она была в блоке бтн-блок. Должна вывести "Привет"

btn_block.addEventListener('click', (event) => {
 if (event.target && event.target.matches('button')) { // Если объект есть и объект кнопка, то действие выполнится
  console.log('Привет'); 
 };
});