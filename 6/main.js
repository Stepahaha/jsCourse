let btn = document.getElementsByTagName('button'),
    link = document.getElementsByTagName('a');

btn[2].addEventListener('click', function(){ // .addEventListener('Событие', ф-я() {Действие});
 alert('Ну вот, теперь номана');
});
btn[2].addEventListener('click', function(){
 alert('Ещё второе работает');
}); // Короче выведет и 1 и 2 сразу

btn[1].onclick = function() {
 alert('Уже не так дебильно'); 
} // дебильно всё-таки и лучше так не делать 

btn[3].addEventListener('mouseenter', function(){
 alert('Вы навели на кнопку');
})

btn[4].addEventListener('mouseleave', function(){
 alert('Вы ушли с кнопки');
})

// Получение данных 

btn[5].addEventListener('mouseenter', function(event){
 alert('Произошло событие - ' + event.type + ' на объекте - ' + event.target);
})

// Отмена стандартных событий (нажатие на ссылку и переход по ней к примеру)

link[0].addEventListener('click', function(event){
 event.preventDefault(); // Отмена стандартного действия
 alert('Произошло событие - ' + event.type + ' на объекте - ' + event.target);
});