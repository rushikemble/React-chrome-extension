console.log("content script is running",document.body),chrome.runtime.sendMessage("Hello from content script",(e=>{console.log("Received response",e)}));
//# sourceMappingURL=contentScript.js.map