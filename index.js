const myEmail = validator.isEmail('inna.cervenkova@gmail.com');
document.body.innerHTML += myEmail

const creditCard = validator.isCreditCard('4125010001000208')
document.body.innerHTML += creditCard





const userEmail = prompt('Zadej svuj e-mail:');

const isEmail = validator.isEmail(userEmail);
const msg = document.querySelector('#msg');


if (isEmail) {
  msg.classList.add('msg--valid')
  msg.textContent = 'E-mail v pořádku';
} else {
  msg.classList.add('msg--invalid')
  msg.textContent = 'Neplatný e-mail';
}





















