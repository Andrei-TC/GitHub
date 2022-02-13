const projectHtml = document.querySelector(".html");
const htmlItems = projectHtml.children.item(2);
const projectCss = document.querySelector(".css");
const cssItems = projectCss.children.item(2);
const projectJs = document.querySelector(".js");
const jsItems = projectJs.children.item(2);

htmlItems.children.item(0).addEventListener("click", () => {
  htmlItems.children.item(1).classList.remove("locked");
  htmlItems.children.item(1).classList.add("unlocked");
});
cssItems.children.item(0).addEventListener("click", () => {
  cssItems.children.item(1).classList.remove("locked");
  cssItems.children.item(1).classList.add("unlocked");
});
jsItems.children.item(0).addEventListener("click", () => {
  jsItems.children.item(1).classList.remove("locked");
  jsItems.children.item(1).classList.add("unlocked");
});
