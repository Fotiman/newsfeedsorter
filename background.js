// On a request (from the content script), show the page action icon for the
// tab that the sender (content script) was on
function onRequest(request, sender, callback) {
  chrome.pageAction.show(sender.tab.id);
  callback({});
};

// Listen for the content script to send a message to the background page.
chrome.extension.onMessage.addListener(onRequest);

// For pushstate updates, notify the content script
chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
  if (details.url.match(/^https*:\/\/www\.facebook\.com\/*$/) || details.url.match(/^https*:\/\/www\.facebook\.com\/\?/)) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { event: "onHistoryStateUpdated", details }, function (response) {
        console.log(response.farewell);
      });
    });
  }
});