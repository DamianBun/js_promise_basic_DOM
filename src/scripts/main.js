'use strict';

new Promise((resolve, reject) => {
  const logo = document.getElementsByClassName('logo')[0];

  logo.addEventListener('click', () => {
    resolve();
  });
}).then(() => {
  document.body.innerHTML += `<div class="message">Promise was resolved!</div>`;
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('rejected'));
  }, 3000);
}).catch(() => {
  document.body.innerHTML +=
    '<div class="message error-message">Promise was rejected!</div>';
});
