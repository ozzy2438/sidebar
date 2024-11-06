let sidebarVisible = false;
let sidebar = null;
let contentFrame = null;

function createSidebar() {
    if (sidebar) return;

    sidebar = document.createElement('iframe');
    sidebar.id = 'app-sidebar';
    sidebar.src = chrome.runtime.getURL('sidebar.html');
    sidebar.style.cssText = `
        position: fixed;
        top: 0;
        left: -64px;
        width: 64px;
        height: 100vh;
        border: none;
        z-index: 2147483647;
        transition: left 0.3s ease;
        box-shadow: 2px 0 10px rgba(0,0,0,0.2);
        background: #202124;
    `;
    document.body.appendChild(sidebar);
}

function showSidebar() {
    if (!sidebar) createSidebar();
    sidebar.style.left = '0';
    sidebarVisible = true;
}

function hideSidebar() {
    if (sidebar) {
        sidebar.style.left = '-64px';
        sidebarVisible = false;
    }
}

// Mouse hareketi kontrolü
document.addEventListener('mousemove', (e) => {
    if (e.clientX <= 10) {
        showSidebar();
    } else if (e.clientX > 64 && sidebarVisible) {
        hideSidebar();
    }
});

// Extension mesajlarını dinle
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'toggleSidebar') {
        if (sidebarVisible) {
            hideSidebar();
        } else {
            showSidebar();
        }
    }
});

// Sayfa yüklendiğinde sidebar'ı oluştur
document.addEventListener('DOMContentLoaded', createSidebar);