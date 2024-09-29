const editor = document.getElementById('editor');
if (window.localStorage['TextEditorData']) {
  editor.value = JSON.parse(window.localStorage['TextEditorData']);
}
editor.addEventListener('change', () => {
  window.localStorage['TextEditorData'] = JSON.stringify(editor.value);
});

const clearBtn = document.createElement('button');
clearBtn.innerText = 'Очистить содержимое';
clearBtn.onclick = () => {
  editor.value = '';
  window.localStorage['TextEditorData'] = '';
};
editor.insertAdjacentElement('afterend', clearBtn);