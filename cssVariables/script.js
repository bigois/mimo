// Use localStorage to remember the user's theme preference
let currentTheme = localStorage.getItem('theme') || 'light';

const applyTheme = (theme) => {
    const root = document.documentElement;
    root.dataset.myCustomThemeAttribute = theme; // Set a data attribute on the root element for CSS to use
    localStorage.setItem('theme', theme);
};

const toggleTheme = () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
};

applyTheme(currentTheme);
