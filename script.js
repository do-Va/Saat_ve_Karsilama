let promptName = prompt('Lütfen adınızı giriniz.');
document.querySelector('.js-name').innerText = promptName;

// clock
let hours = document.querySelector('.js-hour');
let minutes = document.querySelector('.js-minutes');
let seconds = document.querySelector('.js-second');
let days = document.querySelector('.js-day');

const colorTime = (times, element) => {
  if (times >= 0 && times < 10) {
    element.style.color = 'rgb(255,154,162)';
  }

  if (times >= 10 && times < 20) {
    element.style.color = 'rgb(255,183,178)';
  }

  if (times >= 20 && times < 30) {
    element.style.color = 'rgb(255,218,193)';
  }

  if (times >= 30 && times < 40) {
    element.style.color = 'rgb(226,240,203)';
  }

  if (times >= 40 && times < 50) {
    element.style.color = 'rgb(181,234,215)';
  }

  if (times >= 50 && times < 60) {
    element.style.color = 'rgb(199,206,234)';
  }
};

let whichDay = day => {
  switch (day) {
    case 1:
      return 'Pazartesi';

    case 2:
      return 'Salı';

    case 3:
      return 'Çarşamba';

    case 4:
      return 'Perşembe';

    case 5:
      return 'Cuma';

    case 6:
      return 'Cumartesi';

    case 7:
      return 'Pazar';
  }
};

let time = () => {
  let date = new Date();
  let day = date.getDay();

  let times = date.toLocaleTimeString().split(':');

  hours.innerHTML = times[0];
  minutes.innerHTML = times[1];
  seconds.innerHTML = times[2];
  days.innerHTML = whichDay(day);

  colorTime(times[1], minutes);
  colorTime(times[2], seconds);
};

setInterval(() => {
  time();
}, 1000);
