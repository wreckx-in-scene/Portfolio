const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'light' ? '' : 'light';
  toggle.textContent = root.dataset.theme === 'light' ? '◐' : '☼';
});

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const form = document.querySelector('.contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = data.get('subject') || 'Portfolio enquiry';
  const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
  window.location.href = `mailto:amoghdandotiya123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
