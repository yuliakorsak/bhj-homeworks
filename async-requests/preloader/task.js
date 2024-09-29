const loader = document.getElementById('loader');
if(window.localStorage.currencyData) {
  fillList(JSON.parse(window.localStorage.currencyData));
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.onreadystatechange = () => {
  if (xhr.readyState === xhr.DONE) {
    const currencyData = JSON.parse(xhr.responseText).response.Valute;
    fillList(currencyData);
    loader.className = 'loader';
    window.localStorage.currencyData = JSON.stringify(currencyData);
  }
};

function fillList(currencyData) {
  const itemsList = document.getElementById('items');
  itemsList.innerHTML = '';
  Object.values(currencyData).forEach(currency => {
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `<div class="item__code">${currency.CharCode}</div><div class="item__value">${currency.Value}</div><div class="item__currency">руб.</div>`;
    itemsList.appendChild(item);
  });
}