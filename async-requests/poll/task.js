const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.onreadystatechange = () => {
  if (xhr.readyState === xhr.DONE) {
    const pollObject = JSON.parse(xhr.responseText);
    const answers = pollObject.data.answers;
    const pollId = pollObject.id;
    document.getElementById('poll__title').innerText = pollObject.data.title;
    for (let i = 0; i < answers.length; i++) {
      const button = document.createElement('button');
      button.className = 'poll__answer';
      button.innerText = answers[i];
      button.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
        sendAnswer(pollId, i);
      });
      pollAnswers.appendChild(button);
    }
  }
};

function sendAnswer(pollId, answerId) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send(`vote=${pollId}&answer=${answerId}`);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === xhr.DONE) {
      const results = JSON.parse(xhr.responseText).stat;
      pollAnswers.innerHTML = '';
      results.forEach(item => {
        const result = document.createElement('div');
        result.innerHTML = `${item.answer}: <span style="font-weight: bold">${item.votes}%</span>`;
        pollAnswers.appendChild(result);
      });
    }
  }
}