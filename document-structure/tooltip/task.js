const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach(element => {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.innerText = element.title;
  tooltip.style.position = 'absolute';
  placeTooltip(tooltip, element);
  element.insertAdjacentElement('afterEnd', tooltip);
  element.removeAttribute('title');
  
  element.addEventListener('click', (e) => {
    e.preventDefault();
    const currentTooltip = document.querySelector('.tooltip_active');
    if (currentTooltip && currentTooltip !== tooltip) {
      currentTooltip.classList.remove('tooltip_active');
    }
    tooltip.classList.toggle('tooltip_active');
  });
});

window.addEventListener('resize', () => {
  document.querySelectorAll('.tooltip').forEach(item => placeTooltip(item, item.previousElementSibling));
});

function placeTooltip(tooltip, element) {
  const rect = element.getBoundingClientRect();
  tooltip.style.left = `${rect.left + window.scrollX}px`;
  tooltip.style.top = `${rect.bottom + window.scrollY}px`;
}