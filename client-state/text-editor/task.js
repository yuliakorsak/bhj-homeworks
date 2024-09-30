const editor = document.getElementById('editor');
editor.value = localStorage.getItem('textEditorData');
editor.addEventListener('input', () => {
  localStorage.setItem('textEditorData', editor.value);
});

const clearBtn = document.createElement('button');
clearBtn.innerText = 'Очистить содержимое';
clearBtn.onclick = () => {
  editor.value = '';
  localStorage.removeItem('textEditorData');
};
editor.insertAdjacentElement('afterend', clearBtn);