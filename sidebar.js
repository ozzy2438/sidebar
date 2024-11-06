document.addEventListener('DOMContentLoaded', function() {
    const appIcons = document.querySelectorAll('.app-icon');

    appIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (!url) return;

            // URL'yi parent window'a gönder
            window.parent.postMessage({
                type: 'openUrl',
                url: url
            }, '*');
        });
    });
}); 