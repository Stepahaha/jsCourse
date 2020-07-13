// Objects


// Создание объекта
let options = {
 name: 'test',
 height: 1000,
 width: 1000
}

console.log(options.height); // Получение св-ва
options.bool = true; // Создание св-ва с именем bool

options.color = {
 border: 'red',
 background: 'white', 
 shadow: 'light'
}  // Объект в объекте

delete options.bool; // Удаление св-ва

for ( let key in options ){
 console.log('Св-во ' + key + ' имеет значение - ' + options[key]); // key - ключ, который обозначает имя св-ва, а options[key] - значение св-ва  
}

console.log(Object.keys(options).length); // Кол-во св-в


// arrays 

let arr = [1, 2, 3, 4, 5, 6];

arr.pop(); // Удаление последнего элемента
console.log(arr.pop()); // Вывод и удаление последнего элемента 
arr.push('new elem'); // Добавление в конец эл-та
arr.shift(); // Удаление первого элемента
arr.unshift('first elem'); // Добавление нового элемента в начало

console.log(arr);


let first = [],
    i = 'aas, dds, sad, safgd';

let second = ["gdd", "qqqdd", "add", "xdd"];
let f = second.join(','); // Объединение массива в одну строку и разделени запятой;
console.log(f);
first = i.split(); // Разделяем на массив после ','
console.log(first);
let x = second.sort(); // Сортировка 
console.log(x);


let nums = [1, 13, 22, 3, 45, 5];
console.log(nums.sort()); // будет 1, 13, 22, 3, 45, 5

function sortNums(a, b){
 return a - b;
}
 

console.log( nums.sort(sortNums) );


// OOP 

let soldier = {
 health: 400, 
 armor: 100
};

let john = {
 health: 100
}

john.__proto__ = soldier; // Наследовани от солдата 

console.log(john); 
console.log(john.armor); // св-во, которого нет у Джона 