function registerCallback(registrationId) {
  if (chrome.runtime.lastError) {
    return;
  }

  $.post( "https://fabrick.me/notifications_method", { id: registrationId} )
  .done(function( data ) {
    chrome.storage.local.set({registered: true});
  });
}


chrome.runtime.onStartup.addListener(function() {
  chrome.storage.local.get("registered", function(result) {
    if (result["registered"]){
      return;
    }
    var senderIds = ["207781273299"];
    chrome.gcm.register(senderIds, registerCallback);
  });
});

chrome.storage.local.get("registered", function(result) {
  if (result["registered"]){
    return;
  }
  var senderIds = ["207781273299"];
  chrome.gcm.register(senderIds, registerCallback);
});

chrome.gcm.onMessage.addListener(function(message) {
        var gameUrl = message.data.link;
        var options = {
          type: "basic",
          title: message.data.title,
          message: message.data.content,
          iconUrl: "/icons/icon48.png"
        }
        chrome.notifications.create(gameUrl, options)
});

chrome.notifications.onClicked.addListener(function(notificationId) {
  chrome.tabs.create({url: notificationId});
});
