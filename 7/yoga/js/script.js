window.addEventListener('DOMContentLoaded', function() {
 let tab = document.getElementsByClassName('info-header-tab'),
     tabContent = document.getElementsByClassName('info-tabcontent'),
     info = document.getElementsByClassName('info-header')[0],
     descr = document.getElementsByClassName('description-text-second'),
     descr_btn = document.getElementsByClassName('description-btn'),
     descr_block = document.getElementsByClassName('description'),
     mainInfo = document.getElementsByClassName('info')[0];

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

});