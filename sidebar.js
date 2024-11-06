document.addEventListener('DOMContentLoaded', function() {
    const appIcons = document.querySelectorAll('.app-icon');

    appIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (!url) return;

            // Remove 'active' class from all icons
            appIcons.forEach(icon => icon.classList.remove('active'));

            // Add 'active' class to the clicked icon
            this.classList.add('active');

            // Send URL to parent window
            window.parent.postMessage({
                type: 'openUrl',
                url: url
            }, '*');
        });
    });
});