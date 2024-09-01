const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let deadCounter = 0;
let lostCounter = 0;

const holes = document.getElementsByClassName('hole');
for (let i = 1; i <= holes.length; i++) {
  const hole = document.getElementById(`hole${i}`);
  hole.addEventListener('click', () => {
    if (hole.className.includes('hole_has-mole')) {
      deadCounter++;
      dead.textContent = deadCounter;
      if (deadCounter === 10) {
        alert("Вы выиграли!");
        reset();
      }
    }
    else {
      lostCounter++;
      lost.textContent = lostCounter;
      if (lostCounter === 5) {
        alert("Вы проиграли");
        reset();
      }
    }
  });
}

function reset() {
  deadCounter = 0;
  dead.textContent = 0;
  lostCounter = 0;
  lost.textContent = 0;
}
