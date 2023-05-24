export const headerFix = () => {
    const headEl = document.querySelector(".header");
const mainEl = document.querySelector(".main");

window.addEventListener("scroll", function (e) {
  const headHeight = headEl.getBoundingClientRect().height;
  if (window.pageYOffset > 0) {
    headEl.classList.add("fix__head");
    mainEl.style.paddingTop = headHeight + "px";
  } else {
    headEl.classList.remove("fix__head");
    mainEl.style.paddingTop = 0;
  }
});
}