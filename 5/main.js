let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'), // Даст все объекты 
    oneHeart = document.querySelector('.heart'); // Даст первый объект 


console.log(box);

console.log(btn[0]); // выведет 1 кнопку
console.log(btn[1]); // выведет 2 кнопку

console.log(circle[1]); // выведет 2 круг
console.log(circle[2]); // выведет 3 круг


console.log(heart[1]); // выведет 2 сердце
console.log(oneHeart); // выведет 1 сердце


box.style.backgroundColor = 'red'; // Меняем стили 


let newElem = document.createElement('div'), // Создание нового эл-та
    text = document.createTextNode('Добавили текста на страницу');


newElem.classList.add('black'); // Добавляем класс об-ту
newElem.style.width = '100px';
newElem.style.height = '100px';
newElem.style.color = 'white';
newElem.style.backgroundColor = 'black';

document.body.appendChild(newElem); // Добавляем объект в body, но можно куда угодно

document.body.insertBefore(newElem, circle[2]); // Вставили ПЕРЕД circle с номером 3

document.body.removeChild(heart[2]); // Удалили 3 сердце 

document.body.replaceChild(box, heart[1]); // Переместиили box на место 2 сердца

newElem.innerHTML = 'text'; // Вставили в newElem код html - короче всё что угодно можно
newElem.textContent = 'Хайло ворлд'; // Вставили в newElem текст - только текст