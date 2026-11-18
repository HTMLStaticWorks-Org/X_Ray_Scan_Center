/* ==========================================================================
   PREMIUM X-RAY & SCAN CENTER - THEME TOGGLE CONTROLLER
   Supports Bright (Medical Green + White) and Dark Mode with LocalStorage
   ========================================================================== */

(function () {
  const THEME_KEY = 'xray-scan-theme';

  // Apply stored theme or default to light immediately to prevent flash
  const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  document.addEventListener('DOMContentLoaded', function () {
    const themeButtons = document.querySelectorAll('.theme-toggle');

    function updateThemeIcons(currentTheme) {
      themeButtons.forEach(btn => {
        btn.setAttribute('aria-label', currentTheme === 'dark' ? 'Switch to Bright Mode' : 'Switch to Dark Mode');
      });
    }

    updateThemeIcons(savedTheme);

    themeButtons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const activeTheme = document.documentElement.getAttribute('data-theme');
        const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem(THEME_KEY, nextTheme);
        updateThemeIcons(nextTheme);
      });
    });
  });
})();
