const dropdowns = Array.from(document.querySelectorAll('.dropdown'));
dropdowns.forEach(dropdown => {
  dropdown.querySelector('.dropdown__value').addEventListener('click', openDropdown);
  const dropdownItems = Array.from(dropdown.querySelectorAll('.dropdown__link'));
  dropdownItems.forEach(item => {
    item.onclick = () => { return false };
    item.addEventListener('click', setDropdownValue);
  });
});

function openDropdown(event) {
  event.currentTarget.parentNode.querySelector('.dropdown__list').classList.add('dropdown__list_active');
}

function setDropdownValue(event) {
  event.currentTarget.closest('.dropdown').querySelector('.dropdown__value').textContent = event.currentTarget.textContent.trim();
  event.currentTarget.closest('.dropdown__list').classList.remove('dropdown__list_active');
}