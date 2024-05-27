let header = `
            <div class="logo">
                <a href="index.html"><img src="/img/logo.png" alt="logo de la compañía"></a>    
            </div>
            <i class="abrir-menu fa-solid fa-bars fa-3x" style="color: #000000;" id="abrir-menu"></i>
            <nav class="navbar" id="navbar">
                <i class="cerrar-menu fa-solid fa-xmark fa-3x" id="cerrar-menu"></i>
                <ul class="menu-lista">
                    <li><a href="index.html">INICIO</a></li>
                    <li><a href="menu.html">MENÚ</a></li>
                    <li><a href="sucursales.html">SUCURSALES</a></li>
                    <li><a href="contacto.html">TRABAJÁ CON NOSOTROS</a></li>
                </ul>
            </nav>
`
let contenedorModal = `
<div id="contenedor-modal">

<button id="btn-abrir-modal"><img src="img/whatsapp1.png" alt="Icono Whatsapp" class="icono wsp"></button>
<dialog id="modal">
    
    <p>Para hacer tu pedido escribinos por Whatsapp indicando lo siguiente: </p>
    <ul>
        <li>Nombre: </li>
        <li>Ciudad: </li>
        <li>Dirección: </li>
        <li>Detalle de la compra: </li>
        <li>Medio de pago:</li>
    </ul>
    <p>Nuestros vendedores van a redirigir tu pedido a la sucursal correspondiente.</p>
    <p id=horario>Podés pedir de Lunes a Domingo, de 12 a 15hs y de 20 a 00hs, o podés acercarte a cualquiera de nuestras sucursales de 12 a 00hs.</p>
    <button id="btn-cerrar-modal" class="modal">Cerrar</button>
    <button id="ir-a-pedido" class="modal">Hacer Pedido</button>
</dialog>
`

let footer = `
            <h2>SIGUENOS</h2>
            <div class="redes">
                <a href="https://www.facebook.com/BurgerQueen"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/BurgerQueen"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.twitter.com/BurgerQueen"><i class="fa-brands fa-square-x-twitter"></i></a>
            </div>
            <div class="copy">
                <small>©2000-2024 <b>Burger Queen</b>-Todos los derechos reservados</small>
            </div>

`
document.querySelector("header").innerHTML=header

document.querySelector("#contenedor-wsp").innerHTML = contenedorModal;

document.querySelector("footer").innerHTML = footer

const btnAbrirModal =
    document.querySelector("#btn-abrir-modal");
const btnCerrarModal =
    document.querySelector("#btn-cerrar-modal");
const modal =
    document.querySelector("#modal");
const irAPedido =
    document.querySelector("#ir-a-pedido")

btnAbrirModal.addEventListener("click", () => {
    modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
    modal.close();
});

irAPedido.addEventListener("click", () => {
    window.open("https://api.whatsapp.com/send/?phone=000000000", "blank_")
});
