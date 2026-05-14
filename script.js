const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

const mobileLinks = mobileNav.querySelectorAll('a');

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
});

const form = document.querySelector('.contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Gracias por tu mensaje. Pronto nos pondremos en contacto.');
  form.reset();
});
