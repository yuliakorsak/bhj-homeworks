const book = document.getElementById('book');
document.querySelectorAll('.book__control a').forEach(a => {
  a.onclick = () => { return false };
});
document.querySelector('.book__control_font-size').addEventListener('click', setSize);
document.querySelector('.book__control_color').addEventListener('click', setTextColor);
document.querySelector('.book__control_background').addEventListener('click', setBgColor);

function setSize(event) {
  event.currentTarget.querySelectorAll('.font-size').forEach(item => item.classList.remove('font-size_active'));
  const target = event.target.closest('.font-size');
  target.classList.add('font-size_active');
  const currentSize = book.className.split(' ').find(name => name.startsWith('book_fs'));
  if (currentSize) {
    book.classList.remove(currentSize);
  }
  if (target.getAttribute('data-size')) {
    book.classList.add('book_fs-' + target.getAttribute('data-size'));
  }
}

function setTextColor(event) {
  event.currentTarget.querySelectorAll('.color').forEach(item => item.classList.remove('color_active'));
  const target = event.target.closest('.color');
  target.classList.add('color_active');
  book.classList.remove(book.className.split(' ').find(name => name.startsWith('book_color-')));
  book.classList.add('book_color-' + target.getAttribute('data-text-color'));
}

function setBgColor(event) {
  event.currentTarget.querySelectorAll('.color').forEach(item => item.classList.remove('color_active'));
  const target = event.target.closest('.color');
  target.classList.add('color_active');
  book.classList.remove(book.className.split(' ').find(name => name.startsWith('book_bg-')));
  book.classList.add('book_bg-' + target.getAttribute('data-bg-color'));
}