// backgroundScript.js
browser.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("message text is:", message.text);
  if (message.text) {
    // Stocke le texte de la page dans le stockage local de l'extension
    browser.storage.local.set({ pageText: message.text });

    // Met à jour la fenêtre contextuelle avec le texte récupéré
    browser.browserAction.setPopup({ popup: "popup.html" });
  }
});
