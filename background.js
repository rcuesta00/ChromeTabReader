console.log("BG running");

// chrome.tabs.query({currentWindow: true , url: "*://www.youtube.com/*"}, function(results) {
//     for(i=0;i<results.length;i++) {
//         console.log('Tab title:', results[i].title);
//     }
// });

// chrome.tabs.onCreated.addListener(function(tab) {
    
// });

function handleUpdated(tabId, changeInfo, tabInfo) {
    if(changeInfo.title) {
        console.log("New tab Info: " + changeInfo.title);
    } 
  }
  
  chrome.tabs.onUpdated.addListener(handleUpdated);


// tabs.forEach(function(tab) {
//     console.log('Tab name: ', tab);
// });