// // Set the date we're counting down to
// var countDownDate = new Date('sep 2, 2020 15:37:25').getTime();

// // Update the count down every 1 second
// var x = setInterval(function () {
//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Output the result in an element with id="demo"
//   document.getElementById('demo').innerHTML =
//     days + 'd: ' + hours + 'h: ' + minutes + 'm: ' + seconds + 's ';

//   // If the count down is over, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById('demo').innerHTML = 'EXPIRED';
//   }
// }, 1000);

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date('Sep 2, 2020 00:00:00').getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById('days').innerText = Math.floor(distance / day)),
      (document.getElementById('hours').innerText = Math.floor(
        (distance % day) / hour
      )),
      (document.getElementById('minutes').innerText = Math.floor(
        (distance % hour) / minute
      )),
      (document.getElementById('seconds').innerText = Math.floor(
        (distance % minute) / second
      ));

    if (distance < 0) {
      clearInterval(x);
    }
  }, second);

//====================================

$('.carousel').carousel({
  interval: 6000,
  pause: 'false',
});
