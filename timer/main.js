let hourInput = document.getElementsByClassName('hours')[0],
    minuteInput = document.getElementsByClassName('minutes')[0],
    secondInput = document.getElementsByClassName('seconds')[0],
    hours_data  = document.getElementsByClassName('hours-data')[0],
    minutes_data = document.getElementsByClassName('minutes-data')[0],
    seconds_data = document.getElementsByClassName('seconds-data')[0],
    startBtn = document.getElementsByClassName('start')[0],
    stopBtn = document.getElementsByClassName('stop')[0],             
    zeroBtn = document.getElementsByClassName('zero')[0],             
    timer_data = document.getElementsByClassName('timer-data')[0],
    timer = document.getElementById('timer')[0], 
    inputBlock = [hourInput, minuteInput, secondInput];
   

for (let i = 0; i < inputBlock.length; i++) {
 inputBlock[i].value = 0;
}
timer_data.addEventListener('change', function(event){
 let target = event.target,
     dataBlock = [hours_data, minutes_data, seconds_data];
 if (target == hours_data || target == minutes_data || target == seconds_data ) {
  for (let i = 0; i < inputBlock.length; i++){
   if (target == dataBlock[i]){
    inputBlock[i].innerHTML = dataBlock[i].value;
    inputBlock[i].value = dataBlock[i].value;
    break;
   };
  };
 };
});   



startBtn.onclick = function(){
 zeroBtn.addEventListener('click', function(){
  hourInput.value = 0;
  minuteInput.value = 0;
  secondInput.value = 0;
  hourInput.innerHTML = 00;
  minuteInput.innerHTML = 00;
  secondInput.innerHTML = 00;
 });
 let t = setInterval(timeDown, 1000);
 stopBtn.addEventListener('click', function(){
  clearInterval(t);
 });
 function timeDown(){
  let total = minuteInput.value + hourInput.value + secondInput.value;
  console.log(total);
  if (total <= 0) {
   clearInterval(t);
   return true;
  };
  console.log(total)
  if (minuteInput.value == 0 && hourInput.value != 0) {
   minuteInput.innerHTML = 60;
   minuteInput.value = 60;
   hourInput.innerHTML = hourInput.value - 1;
   hourInput.value = hourInput.value - 1;
  };
  if (secondInput.value == 0 && minuteInput.value != 0) {
   secondInput.innerHTML = 60;
   secondInput.value = 60;
   minuteInput.innerHTML = minuteInput.value - 1;
   minuteInput.value = minuteInput.value - 1;
  };
  secondInput.innerHTML = secondInput.value - 1;
  secondInput.value = secondInput.value - 1;
  
 };
};
