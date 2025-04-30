chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed.");

  // Test chrome.storage.sync
  chrome.storage.sync.set({ testKey: "Hello Sync!" }, () => {
    if (chrome.runtime.lastError) {
      console.error("Error:", chrome.runtime.lastError);
    } else {
      console.log("Data stored successfully!");

      chrome.storage.sync.get("testKey", (result) => {
        console.log("Retrieved Data:", result.testKey);
      });
    }
  });
});
