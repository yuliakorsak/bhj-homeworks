document.addEventListener('scroll', toggleReveal);
const reveals = document.querySelectorAll('.reveal');

function toggleReveal(e) {
  reveals.forEach(element => {    
    if (isVisible(element.getBoundingClientRect())) {
      if (!element.classList.contains('reveal_active'))
        element.classList.add('reveal_active');
    }
    else {
      if (element.classList.contains('reveal_active')) {
        element.classList.remove('reveal_active');
      }
    }
  });
}

function isVisible(rect) {
  if (rect.bottom < 0 || rect.top > window.innerHeight) {
    return false;
  }
  return true;
}