browser.storage.local.get(["pageText"], function (result) {
  let text;
  if (result.pageText) {
    // pour chaque selection de mots crée un li
    for (let i = 0; i < result.pageText.length; i++) {
      text = document.createElement("li");
      text.textContent = result.pageText[i];
      document.getElementById("text-container").appendChild(text);
    }
  }
});
