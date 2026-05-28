const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const themeToggle = document.getElementById('themeToggle');
const themeToggleIcon = themeToggle.querySelector('.theme-toggle__icon');
const themeToggleText = themeToggle.querySelector('.theme-toggle__text');
const heroSlides = document.querySelectorAll('.hero-slide');
const form = document.querySelector('.contact-form');

const themes = {
  dark: {
    bodyClass: 'theme-dark',
    icon: '☾',
    label: 'Oscuro',
    ariaLabel: 'Cambiar a modo claro',
    pressed: 'true',
  },
  light: {
    bodyClass: 'theme-light',
    icon: '☀',
    label: 'Claro',
    ariaLabel: 'Cambiar a modo oscuro',
    pressed: 'false',
  },
};

let activeSlide = 0;
let activeTheme = 'dark';

function setTheme(theme) {
  activeTheme = theme;
  const settings = themes[theme];

  document.body.classList.remove(themes.dark.bodyClass, themes.light.bodyClass);
  document.body.classList.add(settings.bodyClass);
  themeToggleIcon.textContent = settings.icon;
  themeToggleText.textContent = settings.label;
  themeToggle.setAttribute('aria-label', settings.ariaLabel);
  themeToggle.setAttribute('aria-pressed', settings.pressed);
}

function showSlide(index) {
  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === index);
  });
}

function startHeroCarousel() {
  if (!heroSlides.length) return;

  showSlide(activeSlide);

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

themeToggle.addEventListener('click', () => {
  setTheme(activeTheme === 'dark' ? 'light' : 'dark');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Gracias por tu mensaje. Pronto nos pondremos en contacto.');
  form.reset();
});

setTheme('dark');
startHeroCarousel();
