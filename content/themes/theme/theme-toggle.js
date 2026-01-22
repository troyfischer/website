// Theme toggle functionality
(function() {
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle.querySelector('i');

  // Check for saved theme preference or default to OS preference
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
  } else {
    // Check OS preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = prefersDark ? 'dark' : 'light';
    html.setAttribute('data-theme', theme);
    updateIcon(theme);
  }

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
  });

  function updateIcon(theme) {
    if (theme === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
})();
