function sortIfNotSorted() {
  const sortKey = 'sk', sortMostRecent = 'h_chr', sortTopStories = 'h_nor';
  const sortedLink = document.querySelector(`[href="/?${sortKey}=${sortTopStories}"][data-testid="back_to_top_link"]`);
  const params = new URLSearchParams(window.location.search.substring(1));

  if (!sortedLink && params.get(sortKey) !== sortMostRecent) {
    clog('sorting...');
    params.set(sortKey, sortMostRecent);
    window.location.search = `?${params.toString()}`;
  } else {
    clog('already sorted');
  }
}

function clog (message) {
  console.log(`[fmr] ${(new Date()).toLocaleTimeString()}: ${message}`);
}

// Tell the background page that we're here so it can activate the icon
// and then sort when the background page sends a response.
chrome.extension.sendMessage({}, sortIfNotSorted);

// Listen for messages from the background page
chrome.runtime.onMessage.addListener(function (request, sender, callback) {
  if (request.event === "onHistoryStateUpdated") {
    sortIfNotSorted();
  }
  callback({farewell: "done"});
});