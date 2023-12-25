const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  const mailto = 'mailto:yalovmaria25@gmail.com?subject=New message from website&body=' + encodeURIComponent(body);
  window.location.href = mailto;
});
