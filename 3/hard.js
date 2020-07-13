// let str = '“урок-3-был слишком легким”';
// function firstChar(elem){
//  elem = elem.replace('“', ' ');
//  elem = elem.replace('”', ' '); 
//  alert(elem[0].toUpperCase() + elem.slice(1));
//  elem = elem.replace('легким', '');
//  elem = elem.replace(elem[elem.length - 2], 'о');
//  elem = elem.replace(elem[elem.length - 3], 'о');
//  alert(elem[1].toUpperCase() + elem.slice(2)); 
// }

// firstChar(str);


// function checkSpam(elem){
//  elem = elem.toLowerCase();
//  (elem.indexOf('viagra') > -1 || elem.indexOf('xxx') > -1)? alert(true): alert(false)
// }

// checkSpam('bla bla viAgRa');




let arr = [20, 33, 1, 'Человек', 2, 3];

function workArr(arr){
 let sum = 0
 arr.forEach(element => {
  if (isNaN(element) == false){
   sum += Math.pow(element, 3);
  }
 });
 return Math.pow(sum, 0.5);
}
alert(workArr(arr));