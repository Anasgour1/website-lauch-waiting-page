let countDownDate = new Date("Oct 14, 2024 00:00:00").getTime();
let x =setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) /(1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

   document.getElementById('days').innerHTML = days;
   document.getElementById('hour').innerHTML = hours;
   document.getElementById('Minutes').innerHTML = minutes;
   document.getElementById('Secound').innerHTML = seconds;

   if(distance < 0){
    clearInterval(x)
    document.getElementById('days').innerHTML = "00";
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('Minutes').innerHTML = "00";
    document.getElementById('Secound').innerHTML = "00";
 
   }

},1000 );