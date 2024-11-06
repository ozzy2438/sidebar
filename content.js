const sidebarContainer = document.createElement('div');
sidebarContainer.id = 'chrome-sidebar-extension';

const iframe = document.createElement('iframe');
iframe.src = chrome.runtime.getURL('sidebar.html');
sidebarContainer.appendChild(iframe);
document.body.appendChild(sidebarContainer);

let timeout;
const SHOW_DELAY = 300; // ms to wait before showing
const HIDE_DELAY = 1000; // ms to wait before hiding
const TRIGGER_AREA = 50; // px from left edge to trigger show

function showSidebar() {
  clearTimeout(timeout);
  sidebarContainer.classList.add('open');
}

function hideSidebar() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    if (!isMouseOverSidebar()) {
      sidebarContainer.classList.remove('open');
    }
  }, HIDE_DELAY);
}

function isMouseOverSidebar() {
  const sidebarRect = sidebarContainer.getBoundingClientRect();
  return (
    mouseX >= sidebarRect.left &&
    mouseX <= sidebarRect.right &&
    mouseY >= sidebarRect.top &&
    mouseY <= sidebarRect.bottom
  );
}

let mouseX = 0;
let mouseY = 0;

// Track mouse position
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (mouseX <= TRIGGER_AREA) {
    setTimeout(() => showSidebar(), SHOW_DELAY);
  } else if (!isMouseOverSidebar()) {
    hideSidebar();
  }
});

// Keep sidebar open while mouse is over it
sidebarContainer.addEventListener('mouseenter', () => {
  clearTimeout(timeout);
  showSidebar();
});

sidebarContainer.addEventListener('mouseleave', () => {
  hideSidebar();
});

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'toggleSidebar') {
    if (message.isOpen) {
      showSidebar();
    } else {
      sidebarContainer.classList.remove('open');
    }
  }
});
