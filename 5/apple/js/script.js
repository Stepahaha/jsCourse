let menuItem = document.querySelectorAll('li.menu-item'),
    menu = document.querySelector('.menu'),
    title = document.getElementById('title'),
    adv = document.querySelectorAll('.adv'),
    comment = document.getElementById('prompt');

let newElem = document.createElement('li'),
    third = menuItem[1];
newElem.classList.add('menu-item');
newElem.textContent = 'Пятый пункт';


menu.appendChild(newElem);
menu.replaceChild(menuItem[2], menuItem[1]);
menu.insertBefore(third, menuItem[3]);

title.textContent = 'Мы продаем только подлинную технику Apple';


adv[0].parentNode.removeChild(adv[0]);

function getAnswer() {
 let quest = confirm('Можно вопрос?');

if (quest) {
 let answer = prompt('Как вы относитесь к технике Apple?', '');
 comment.innerText = answer;
} else {
 alert('Ну и пошёл ты!');
 comment.innerText = 'Никак не относится, уродец'
};
}

getAnswer();