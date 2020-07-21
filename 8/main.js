let box = document.querySelector('.box'),
    width = box.clientWidth,
    height = box.clientHeight,
    width2 = box.offsetWidth,
    width3 = box.scrollWidth,
    height2 = box.offsetHeight;
    height3 = box.scrollHeight,
    btn = document.getElementsByTagName('button')[0];

// btn.onclick = function() {
//     // box.style.height = box.scrollHeight + 'px';
//     console.log(box.scrollTop); 
// }    
    



console.log(document.documentElement.scrollTop); // Сколько прокручено всей страницы 
 
window.scrollBy(0, 0); // Сместиться относительно текущего положения на (x, y) px
window.scrollTo(0, 0); // Сместиться на указанные координаты (x, y) px 

console.log(box.getBoundingClientRect())

console.log(width);
console.log(height);
console.log(width2);
console.log(height2);
console.log(height3);
console.log(width3);