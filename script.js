const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const contactForm = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
const revealItems = document.querySelectorAll('.reveal');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('active');
  document.body.classList.toggle('menu-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('active');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const nombre = formData.get('nombre')?.toString().trim() || 'Sin nombre';
  const correo = formData.get('correo')?.toString().trim() || 'Sin correo';
  const servicio = formData.get('servicio')?.toString().trim() || 'Sin servicio seleccionado';
  const mensaje = formData.get('mensaje')?.toString().trim() || 'Sin detalle adicional';
  const whatsappNumber = '56900000000';
  const text = `Hola Arkaius Digital, soy ${nombre}. Mi correo es ${correo}. Me interesa: ${servicio}. Detalle: ${mensaje}`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, '_blank');
  msg.textContent = '✓ Se abrirá WhatsApp con tu solicitud. Si no se abre automáticamente, escríbenos directamente.';
});

setTheme('dark');
startHeroCarousel();
