let btn = document.querySelectorAll('.link'),
    block = document.querySelectorAll('.block'),
    menu = document.querySelector('.menu');


// function goingTo(id, y) {
//  console.log(y);
//  let timerId = setInterval(transform, 1, y);
//  function transform(y){
//   let startY = document.documentElement.scrollTop;
//   window.scrollBy(0, y/150)
//   console.log(startY);
//   if (startY >= y){
//    console.log('end')
//    clearInterval(timerId)
//    return true;
//   }
//   if (id == (btn.length - 1)){
//    if((startY + 200) >= y ){
//     console.log('end')
//     clearInterval(timerId)
//     return true;
//    }
//   }
//  }
// };


// function goingTo(id, y) {
//  console.log(y);
//  let i = 0;
//  let timerId = setInterval(transform, 1, y);
//  function transform(y){
//   let startY = document.documentElement.scrollTop;
//   window.scrollTo(0, y/150 + y/150 * i)
//   console.log(startY);
//   i += 1;
//   if (startY == y){
//    console.log('end')
//    clearInterval(timerId)
//    return true;
//   }
//   if (id == (btn.length - 1)){
//    if((startY + 200) == y ){
//     console.log('end')
//     clearInterval(timerId)
//     return true;
//    }
//   }
//  }
// };
function goingTo(y){
 window.scrollBy({
  top: y,
  behavior: 'smooth'
 });
}







menu.addEventListener('click', function(event){
 let target = event.target;
 if (target.className == 'link') {
  for (let i = 0; i < btn.length; i++){
   if (target == btn[i]){
    goingTo(block[i].getBoundingClientRect().top);
    break;
   };
  };
 }; 
});