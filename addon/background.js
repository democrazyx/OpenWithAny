chrome.browserAction.onClicked.addListener(function(tab) {
    // Get the current tab URL
    var currentUrl = tab.url;
    // Modify the URL
    var modifiedUrl = 'openedge://'+currentUrl;
    // Open the modified URL in the same tab
    chrome.tabs.update(tab.id, {url: modifiedUrl});
  });