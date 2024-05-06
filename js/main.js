let header = `

<div class="logo">
            <img src="/img/logo.png" alt="logo de la compañía">
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

document.querySelector("footer").innerHTML = footer

