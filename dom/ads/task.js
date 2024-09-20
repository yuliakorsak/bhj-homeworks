/* Простой вариант */

/* document.querySelectorAll('.rotator').forEach(rotator => {
  const ads = rotator.querySelectorAll('.rotator__case');
  let index = 0;
  function switchActive() {
    const nextIndex = index === ads.length - 1 ? 0 : index + 1;
    ads[index].classList.remove('rotator__case_active');
    ads[nextIndex].classList.add('rotator__case_active');
    index = nextIndex;
  }
  setInterval(switchActive, 1000);
}); */


/* Повышенный уровень сложности */

document.querySelectorAll('.rotator').forEach(rotator => {
  const ads = rotator.querySelectorAll('.rotator__case');
  let index = 0;
  ads[index].style.color = ads[index].dataset.color;

  let id = setTimeout(rotate, ads[index].dataset.speed);

  function rotate() {
    if (ads[index].classList.contains("rotator__case_active")) {
      ads[index].classList.remove("rotator__case_active");
    }
    index = index === ads.length - 1 ? 0 : index + 1;
    if (!ads[index].classList.contains("rotator__case_active")) {
      ads[index].classList.add("rotator__case_active");
    }
    ads[index].style.color = ads[index].dataset.color;
    id = setTimeout(rotate, ads[index].dataset.speed);
  }
});