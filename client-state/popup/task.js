const cookies = document.cookie.split('; ');
if (!cookies.find(c => c.startsWith('popupClosed'))) {
  document.getElementById('subscribe-modal').classList.add('modal_active');
}

document.querySelector('.modal__close_times').addEventListener('click', (e) => {
  e.currentTarget.closest('.modal').classList.remove('modal_active');
  document.cookie = `popupClosed=true`;
});