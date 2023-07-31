browser.storage.local.get(["pageText"], function (result) {
  console.log("popup debug:", result.pageText);
  if (result.pageText) {
    document.getElementById("text-container").textContent = result.pageText;
  }
});
