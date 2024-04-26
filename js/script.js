const navBar = document.querySelector("#navbar");
const abrir = document.querySelector("#abrir-menu");
const cerrar = document.querySelector("#cerrar-menu");

abrir.addEventListener("click", () =>   {
    navBar.classList.add("visible");
});

cerrar.addEventListener("click", () =>   {
    navBar.classList.remove("visible");
});