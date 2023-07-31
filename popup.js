document.getElementById("openNewPage").addEventListener("click", function () {
  // Ouvrir la nouvelle page dans un nouvel onglet
  browser.tabs.create({ url: browser.runtime.getURL("content.html") });
});

browser.storage.local.get(["pageText"], function (result) {
  if (result.pageText) {
    // pour chaque sélection de mots crée un li
    for (let i = 0; i < result.pageText.length; i++) {
      createListItem(result.pageText[i]);
    }
  }
});

function createListItem(textContent) {
  const text = document.createElement("li");
  const btnDelet = document.createElement("button");
  btnDelet.textContent = "X";
  text.textContent = textContent;

  // Ajoute un gestionnaire d'événements au bouton pour supprimer un élément de liste
  btnDelet.addEventListener("click", () => {
    text.remove();
  });

  text.appendChild(btnDelet);
  document.getElementById("text-container").appendChild(text);
}
