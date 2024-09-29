const login = getLoginCookie();
if (login) {
  showWelcome(decodeURIComponent(login.substring(login.indexOf('=') + 1)));
}
else {
  const form = document.getElementById('signin__form');
  form.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === xhr.DONE) {
        const response = JSON.parse(xhr.responseText);
        if (response.success === true) {
          showWelcome(response['user_id']);
          document.cookie = 'login=' + encodeURIComponent(response['user_id']);
        }
        else {
          alert('Неверный логин/пароль');
        }
      }
    };
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);
  }
}

function getLoginCookie() {
  const cookies = document.cookie.split('; ');
  return cookies.find(c => c.startsWith('login='));
}

function showWelcome(id) {
  const signin = document.getElementById('signin');
  signin.querySelectorAll('input').forEach(input => input.value = '');
  signin.classList.remove('signin_active');
  const welcome = document.getElementById('welcome');
  welcome.classList.add('welcome_active');
  welcome.querySelector('#user_id').innerText = id;
}

function logout() {
  document.cookie = getLoginCookie() + '; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  location.reload();
}

const logoutBtn = document.createElement('button');
logoutBtn.innerText = 'Выход';
logoutBtn.onclick = logout;
logoutBtn.style = 'display: block; margin: 10px auto 0'
document.getElementById('welcome').appendChild(logoutBtn);

