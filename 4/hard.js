function matrix(){
 let amount = +prompt('Сколько нужно массивов включить в arr?', ''),
     arr = [],
     sum = 0;
 while (isNaN(amount) || amount == null || amount ==''){
  amount = +prompt('Сколько нужно массивов включить в arr?', '');
 };
 for (let i = 0; i < amount; i++) {
  arr.push([]);
  for (let j = 0; j < 5; j ++) {
   arr[i].push(randomNumber(0, 100 ));
  }
  arr[i].forEach(element => {
   sum += element;
  });
 };
 alert('Сумма элементов - ' + sum);
 return arr
}

console.log(matrix());

function randomNumber(min, max) {
 return Math.floor(Math.random() * (max - min + 1) + min);
}