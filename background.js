let sidebarOpen = false;

chrome.action.onClicked.addListener((tab) => {
  sidebarOpen = !sidebarOpen;
  chrome.tabs.sendMessage(tab.id, { action: "toggleSidebar", isOpen: sidebarOpen });
});