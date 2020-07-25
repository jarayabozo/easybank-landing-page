const buttonMenu = document.getElementById("buttonMenu");
const headerNavigation = document.getElementById("headerNavigation");

buttonMenu.addEventListener("click", (e) => {
  headerNavigation.classList.toggle("show");
  buttonMenu.classList.toggle("open");
});