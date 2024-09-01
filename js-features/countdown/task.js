/* Простой таймер

const timer = document.getElementById('timer');
let time = +timer.textContent;
const intervalId = setInterval(countdown, 1000);

function countdown() {
  time--;
  timer.textContent = time;
  if(time === 0) {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!')
  }
}
*/

/* Повышенный уровень сложности */
document.getElementById('status').innerHTML = '<div id="status">До окончания конкурса осталось: <span id="timer"></span></div>';
const timer = document.getElementById('timer');
let timeInSeconds = 15919;
showTime(timeInSeconds);
const intervalId = setInterval(countdown, 1000);

function countdown() {
  timeInSeconds--;
  showTime(timeInSeconds);
  if(timeInSeconds === 0) {
    clearInterval(intervalId);
    let a = document.createElement('a');
    a.download = 'testfile.txt';
    a.href = 'testfile.txt';
    a.click();
    a.remove();
  }
}

function showTime(seconds) {
  let ss = (seconds % 60).toString().padStart(2, '0');;
  let mm = (Math.floor(seconds / 60) % 60).toString().padStart(2, '0');
  let hh = Math.floor(seconds / 3600).toString().padStart(2, '0');
  timer.textContent = hh + ':' + mm + ':' + ss;
}