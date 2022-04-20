//https://verse.aavegotchi.com/_next/static/images/inventory-7ed6e154bfbc5368bbd45861dbea2b84.png
//https://bankrotstvo.legal/upload/iblock/f7d/f7de69653d34b7b7f64d805ac43ef8d7.jpg
//https://verse.aavegotchi.com/animations/pickups_x3.png
var callback = function(event) {
    if (flag) {
        return {cancel: true};
    }
}
var flag = false
var create_blocks = function(event) {
    flag = true
}
filter = { "urls": ["https://verse.aavegotchi.com/_next/static/images/inventory-7ed6e154bfbc5368bbd45861dbea2b84.png"]}
filter2 = {"urls": ["https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-svg"]}
chrome.webRequest.onBeforeRequest.addListener(create_blocks, filter)
chrome.webRequest.onBeforeRequest.addListener(callback, filter2, ['blocking']);
chrome.webRequest.onBeforeRequest.addListener(function(tabId,changeInfo,tab){
        flag = false
}, {"urls": ["https://scripts.simpleanalyticscdn.com/latest.js"]});

var host = "https://i.ibb.co/ChPCTbb/supermegashedevr.png";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: host};
    },
    {
        urls: [
            "https://verse.aavegotchi.com/animations/pickups_x3.png"
        ]
        // types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);