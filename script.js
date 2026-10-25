const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const heroSlides = document.querySelectorAll('.hero-slide');
const form = document.querySelector('.contact-form');

let activeSlide = 0;

function showSlide(index) {
  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === index);
  });
}

function startHeroCarousel() {
  if (!heroSlides.length) return;

  showSlide(activeSlide);

  if (heroSlides.length === 1) return;

  window.setInterval(() => {
    activeSlide = (activeSlide + 1) % heroSlides.length;
    showSlide(activeSlide);
  }, 5200);
}

menuToggle.addEventListener('click', () => {
  const isActive = mobileNav.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', String(isActive));
});

mobileNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Gracias por tu mensaje. Pronto nos pondremos en contacto.');
  form.reset();
});

startHeroCarousel();
