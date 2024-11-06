chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, { action: 'toggleSidebar' })
        .catch(error => console.error('Error:', error));
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'openTab') {
        chrome.tabs.create({ 
            url: request.url,
            active: true
        });
    }
});