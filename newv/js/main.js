const qvList = document.querySelector(".career-qv");
const feList = document.querySelector(".career-fe");
const dList = document.querySelector(".career-3d");

window.onclick = (e) => {
  var parent = e.target.children[1].parentNode.parentNode.parentNode.parentNode;
  if (parent == qvList) {
    var qvCurrentActive = document.querySelector(".qvActive");
    if ((e.target.children[1].classList = qvCurrentActive)) {
      qvCurrentActive.classList.remove("qvActive");
    }
    if (
      e.target.children[1].classList.contains("qvActive") & !qvCurrentActive
    ) {
      e.target.children[1].classList.remove("qvActive");
    } else {
      e.target.children[1].classList.add("qvActive");
    }
  } else if (parent == feList) {
    var feCurrentActive = document.querySelector(".feActive");
    if ((e.target.children[1].classList = feCurrentActive)) {
      feCurrentActive.classList.remove("feActive");
    }
    if (
      e.target.children[1].classList.contains("feActive") & !feCurrentActive
    ) {
      e.target.children[1].classList.remove("feActive");
    } else {
      e.target.children[1].classList.add("feActive");
    }
  } else if (parent == dList) {
    var dCurrentActive = document.querySelector(".dActive");
    if ((e.target.children[1].classList = dCurrentActive)) {
      dCurrentActive.classList.remove("dActive");
    }
    if (e.target.children[1].classList.contains("dActive") & !dCurrentActive) {
      e.target.children[1].classList.remove("dActive");
    } else {
      e.target.children[1].classList.add("dActive");
    }
  } else return;
};
