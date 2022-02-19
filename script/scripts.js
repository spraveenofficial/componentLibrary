const compMenu = document.querySelector(".mobile-menu");
const compNav = document.querySelector(".aside-nav");
const menuItem = document.querySelector(".menu_content");
const imageToRotate = document.querySelector(".fa-chevron-right")
let isMobileMenuOpen = false;
compMenu.addEventListener("click", () => {
  if (!isMobileMenuOpen) {
    menuItem.style.display = "block";
    compMenu.style.height = "16rem";
    compMenu.style.overflowY = "scroll";
    imageToRotate.style.transform = "rotate(180deg)"
    isMobileMenuOpen = !isMobileMenuOpen;
  } else {
    menuItem.style.display = "none";
    compMenu.style.height = null;
    compMenu.style.overflowY = null;
    imageToRotate.style.transform = null;
    isMobileMenuOpen = !isMobileMenuOpen;
  }
});
