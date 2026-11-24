(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('amogh-theme');
  const initialTheme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  }

  setTheme(initialTheme);
  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('amogh-theme', next);
    setTheme(next);
  });
})();
