const themeToggle = document.querySelector('#themeToggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    html.classList.add('dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {

    html.classList.toggle('dark');

    const isDark = html.classList.contains('dark');

    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    themeToggle.textContent = isDark ? '☀️' : '🌙';

});