document.getElementById("header").innerHTML = ` 

<div>

    <nav class="navbar navbar-expand-sm navbar-light ">
    <div class="container">
  
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" href="index.html" aria-current="page">Home<span class="visually-hidden">(current)</span></a>
                </li>
        
                <li class="nav-item dropdown" id="crud"   >
                    <a class="nav-link dropdown-toggle" href="#" id="dropdownId"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Editar</a>
                <div class="dropdown-menu" aria-labelledby="dropdownId" >
                    <a class="dropdown-item" href="productos.html">Productos</a>
                    <a class="dropdown-item" href="usuarios.html">Empleados</a>
                
                </div>
                </li>
        
            </ul>
        </div>
        <h2>Acceso Administrativo</h2>
    </div>
    </nav>
</div>
`
document.getElementById("footer").innerHTML =
`
            <div class="copy">
                <small>©2000-2024 <b>Burger Queen</b>-Todos los derechos reservados</small></br> 
                <a class="acceso-administrativo" href="index.html">Home Page</a>
            </div>
`
