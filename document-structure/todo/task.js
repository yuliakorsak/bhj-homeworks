const form = document.getElementById('tasks__form');

// Базовый уровень сложности
/* form.onsubmit = () => {
  const input = document.getElementById('task__input');

  if (input.value) {
    const task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = '<div class="task__title"></div><a href="#" class="task__remove">&times;</a>';
    task.querySelector('.task__title').innerText = input.value;
    task.querySelector('.task__remove').onclick = () => {
      e.currentTarget.closest('.task').remove();
      return false;
    }
    document.getElementById('tasks__list').appendChild(task);
    input.value = '';
  }
  return false;
}; */

// Повышенный уровень сложности
const storage = window.localStorage;
const todo = storage['todo'] ? JSON.parse(storage['todo']) : [];
todo.forEach(task => showTask(task));

form.onsubmit = (e) => {
  e.preventDefault();
  const input = document.getElementById('task__input');
  if (input.value) {
    todo.push(input.value);
    storage.setItem('todo', JSON.stringify(todo));
    showTask(input.value);
    input.value = '';
  }
};

function showTask(taskTitle) {
  const task = document.createElement('div');
  const list = document.getElementById('tasks__list');
  task.className = 'task';
  task.innerHTML = '<div class="task__title"></div><a href="#" class="task__remove">&times;</a>';
  task.querySelector('.task__title').innerText = taskTitle;
  task.querySelector('.task__remove').onclick = (e) => {
    e.preventDefault();
    todo.splice(Array.from(list.children).indexOf(task), 1);
    storage.setItem('todo', JSON.stringify(todo));
    task.remove();
  }
  list.appendChild(task);
}