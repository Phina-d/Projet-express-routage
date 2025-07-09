// theme.js
const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  const isDark = document.body.classList.contains('dark-theme');
  toggleBtn.textContent = isDark ? '☀️ Mode clair' : '🌓 Mode sombre';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Charger le thème depuis localStorage
window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
    toggleBtn.textContent = '☀️ Mode clair';
  }
});
// Toggle menu mobile (hamburger)
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

navToggle?.addEventListener("click", () => {
  navLinks?.classList.toggle("show");
});
