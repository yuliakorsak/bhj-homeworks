const progressbar = document.getElementById('progress');
const form = document.forms.form;

form.onsubmit = (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  const formData = new FormData(form);
  xhr.upload.onprogress = (event) => {
    progressbar.value = event.loaded / event.total;
  }
  xhr.send(formData);
};