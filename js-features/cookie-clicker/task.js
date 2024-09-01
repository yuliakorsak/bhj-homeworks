document.getElementsByClassName('clicker__status')[0].innerHTML += '<br> Скорость клика <span id="clicker__speed">0</span>';
const cookie = document.getElementById('cookie');
cookie.addEventListener('click', countUp);
const counter = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');
let value = 0;
let lastClick = new Date();

function countUp() {
  let delta = new Date() - lastClick;
  lastClick = new Date();
  value++;
  counter.textContent = value.toString();
  speed.textContent = (1000 / delta).toFixed(2);
  if (value % 2) {
    cookie.width = 180;
  }
  else {
    cookie.width = 200;
  }
}