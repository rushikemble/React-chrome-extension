console.log("content script is running", document.body);
chrome.runtime.sendMessage("Hello from content script", (response) => {
  console.log("Received response", response);
});
