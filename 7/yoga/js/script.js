window.addEventListener('DOMContentLoaded', function() {
 let tab = document.getElementsByClassName('info-header-tab'),
     tabContent = document.getElementsByClassName('info-tabcontent'),
     info = document.getElementsByClassName('info-header')[0],
     descr = document.getElementsByClassName('description-text-second'),
     descr_btn = document.getElementsByClassName('description-btn'),
     descr_block = document.getElementsByClassName('description'),
     mainInfo = document.getElementsByClassName('info')[0],
     menu = document.querySelector('nav'),
     mylink = document.querySelectorAll('button.mylink'),
     about = document.getElementById('about'),
     photo = document.getElementById('photo'),
     price = document.getElementById('price'),
     contacts = document.getElementById('contacts'),
     moreInfo = document.getElementsByClassName('moreInfo'),
     block_container = [about, photo, price, contacts];


 // Tabs    

 function hideTabContent(a){ 
  for (let i = a; i < tabContent.length; i++) {
   tabContent[i].classList.remove('show');
   tabContent[i].classList.add('hide');
  }
 }

 function hideDescr(a){
  for (let i = a; i < descr.length; i++){
   descr[i].classList.remove('show');
   descr[i].classList.add('hide');
   moreInfo[i].classList.remove('showNew');
   moreInfo[i].classList.add('hide');
   descr_btn.textContent = 'УЗНАТЬ ПОДРОБНЕЕ';
  }
 }


 hideDescr(0);
 hideTabContent(1); // Скрытие табов начинается со второго эл-та. Первый остается
 
 function showTabContent(b) {
  if (tabContent[b].classList.contains('hide')) {
   hideTabContent(0);
   tabContent[b].classList.remove('hide');
   tabContent[b].classList.add('show');
  }  
 } 

 function showMore(b){
  if (descr[b].classList.contains('hide')){
   hideDescr(0);
   descr_btn[b].textContent = 'СКРЫТЬ';
   descr[b].classList.remove('hide');
   descr[b].classList.add('show');
   moreInfo[b].classList.remove('hide');
   moreInfo[b].classList.add('showNew');
  } else {
   hideDescr(0);
   descr_btn[b].textContent = 'УЗНАТЬ ПОДРОБНЕЕ';
  }
 }

 mainInfo.addEventListener('click', function(event){
  let target = event.target;
  console.log(target);
  if ( target.className == 'info-header-tab' ) {
   for (let i = 0; i < tab.length; i++) {
    if (target == tab[i]){
     showTabContent(i);
     break;  
    };
   };
  };
  if (target.className == 'description-btn') {
   for (let i = 0; i < descr_btn.length; i++){
    if (target == descr_btn[i]){
     let timerID = setTimeout(showMore, 10, i);
     break;
    };
   };
  };
 });


 // Timer 

 let deadline = '2020-07-23';

 function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date()), // Время с 1970 года до deadline минус время с 1970 до настоящего времени (Всё в миллисекундах)
      seconds = Math.floor( (t/1000) % 60), // Берем миллисекунды и делим на 1000 => Секунды и берем остаток от 60, тк секунд ровно столько, сколько останется после минут
      minutes = Math.floor( (t/60/1000) % 60), // Получаем кол-во минут и берем остаток от часов
      hours = Math.floor(t/(1000*60*60));  

  return {
   'total': t,
   'hours': hours, 
   'minutes': minutes, 
   'seconds': seconds  
  };     
 };

 function setClock(id, endtime) {

  let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds');

  function updateClock() {
   let t = getTimeRemaining(endtime);
   hours.innerHTML = t.hours;
   minutes.innerHTML = t.minutes;
   seconds.innerHTML = t.seconds;
   if (t.total <= 0) {
    hours.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
   }

   if (t.total <= 0) {
    clearInterval(timeInterval);
   }
  };

  updateClock();
  let timeInterval = setInterval(updateClock, 1000);
 };

 setClock('timer', deadline);

 // Lazy scroll
function goingTo(y){
 let startY = document.documentElement.scrollTop,
     newY = y - startY;
 window.scrollBy({
  top: y, // Перемение на расстояние равное конец минус старт 
  behavior: 'smooth'
 });
};

menu.addEventListener('click', function(event){
 let target = event.target;
 if (target.className == 'mylink') {
  for (let i = 0; i < mylink.length; i++){
   if (target == mylink[i]){
    goingTo(block_container[i].getBoundingClientRect().top);
    break;
   };
  };
 }; 
});

});