const menuToggle = document.querySelector(".menu-toggle"),
  navBar = document.querySelector(".navbar"),
  collapseMenu = document.querySelector(".collapsible-menu");

menuToggle.addEventListener("click", () => {
  navBar.classList.toggle("show-menu");
  if (navBar.classList.contains("show-menu")) {
    collapseMenu.style.maxHeight = collapseMenu.scrollHeight + "px";
    setTimeout(() => {
      collapseMenu.style.overflow = "visible";
    }, 300);
  } else {
    collapseMenu.style.maxHeight = "0px";
    collapseMenu.style.overflow = "hidden";
  }
});
