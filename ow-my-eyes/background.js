browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.executeScript({
        file: "myextension.js"
    });
});