let motsEnregistres = [];

function getPageText(mot) {
  motsEnregistres.push(mot);
  console.log("Mots enregistrés get pageText :", motsEnregistres);
  // send back the words
  browser.runtime.sendMessage({ text: motsEnregistres });
}

// Ajouter un événement pour enregistrer un mot lorsque l'utilisateur sélectionne un mot avec la souris
document.addEventListener("mouseup", function (event) {
  const motSelectionne = window.getSelection().toString().trim();
  if (motSelectionne !== "") {
    // save words
    getPageText(motSelectionne);
  }
});
