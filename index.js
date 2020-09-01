const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date('Sep 2, 2020 08:00:00').getTime(),
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

// $('.carousel').carousel({
//   interval: 10000,
//   pause: 'false',
// });

//=====================================

// function switchStyle() {
//   if (document.getElementById('styleSwitch').checked) {

//   }
//   }
// }

function myFunction(y) {
  if (y.matches) {
    // If media query matches
    // document.getElementById('gallery').classList.add('custom');
    // document.getElementById('exampleModal').classList.add('custom');
    document.getElementById('carouselExampleFade').classList.add('hide');
    document.getElementById('gallery').classList.remove('hide');
    document.getElementById('theme-info').classList.remove('hide');
  } else {
    // document.getElementById('gallery').classList.remove('custom');
    // document.getElementById('exampleModal').classList.remove('custom');
    document.getElementById('gallery').classList.add('hide');
    document.getElementById('carouselExampleFade').classList.remove('hide');
    document.getElementById('theme-info').classList.add('hide');
  }
}

var y = window.matchMedia('(max-width: 480px)');
myFunction(y); // Call listener function at run time
y.addListener(myFunction); // Attach listener function on state changes

//==========================
$('.navbar-collapse a').click(function () {
  $('.navbar-collapse').collapse('hide');
});

//========================
// Initialize elements and events
document.addEventListener('DOMContentLoaded', function () {
  let devfolioOptions = {
    buttonSelector: '#devfolio-apply-now',
    key: 'hackbvp',
  };

  let script = document.createElement('script');
  script.src = 'https://apply.devfolio.co';
  document.head.append(script);

  script.onload = function () {
    new Devfolio(devfolioOptions);
  };

  script.onerror = function () {
    document
      .querySelector(devfolioOptions.buttonSelector)
      .addEventListener('click', function () {
        window.location.href =
          'https://devfolio.co/external-apply/' + devfolioOptions.key;
      });
  };
});
