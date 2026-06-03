(function() {
    'use strict';

    var THEME_KEY = 'theme-preference';

    function getTheme() {
        return localStorage.getItem(THEME_KEY) ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }

    function applyTheme(theme) {
        var darkCss = document.getElementById('dark-theme');
        if (darkCss) darkCss.disabled = (theme === 'light');

        document.documentElement.setAttribute('data-theme', theme);

        var iconName = theme === 'dark' ? 'sun' : 'moon';

        document.querySelectorAll('.dark-theme-toggle').forEach(function(toggle) {
            var a = toggle.querySelector('a');
            if (a && typeof feather !== 'undefined') {
                a.innerHTML = feather.icons[iconName].toSvg();
            }

            var sr = toggle.querySelector('.dark-theme-toggle-screen-reader-target');
            if (sr) {
                sr.textContent = theme === 'dark' ? 'Dark mode' : 'Light mode';
            }
        });
    }

    function toggleTheme() {
        var current = getTheme();
        var next = current === 'dark' ? 'light' : 'dark';
        localStorage.setItem(THEME_KEY, next);
        applyTheme(next);
    }

    /*
     * Usamos 'load' (não DOMContentLoaded) para garantir que o Gokarna
     * já terminou de registrar seus listeners (capture: true) nos toggles.
     * O cloneNode + replaceChild remove todos os listeners antigos.
     * Depois registramos nossos próprios listeners limpos.
     */
    window.addEventListener('load', function() {
        document.querySelectorAll('.dark-theme-toggle').forEach(function(el) {
            var clone = el.cloneNode(true);
            el.parentNode.replaceChild(clone, el);
            clone.addEventListener('click', toggleTheme);
        });

        applyTheme(getTheme());
    });
})();