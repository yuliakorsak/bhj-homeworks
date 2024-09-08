document.querySelectorAll('.tabs').forEach(table => {
  const tabs = table.querySelectorAll('.tab');
  const tabContents = table.querySelectorAll('.tab__content');

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
      for (let j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove('tab_active');
        tabContents[j].classList.remove('tab__content_active');
      }
      tabs[i].classList.add('tab_active');
      tabContents[i].classList.add('tab__content_active');
    });
  }
});