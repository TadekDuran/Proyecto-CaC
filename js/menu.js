let contenedorTarjeta = document.querySelector('.card-grid');
let tarjetas = [];

fetch('../json/menu.json')
.then(response => response.json())
.then(data =>   {
    data.productos.forEach(producto => {
        if (producto.stock) {
            tarjetas.push(problarArray(producto))
        }
    });
    tarjetas.sort((a, b) => obtenerPrecio(a) - obtenerPrecio(b));
    tarjetas.forEach(tarjeta => contenedorTarjeta.appendChild(tarjeta));
})
.catch(error => console.log('Error al cargar el JSON', error));

function problarArray(producto) {
    let flipCard = document.createElement('div');
    flipCard.classList.add('flip-card', 'fc-menu');

    let flipCardInner = document.createElement('div');
    flipCardInner.classList.add('flip-card-inner', 'fci-menu');

    let flipCardFront = document.createElement('div');
    flipCardFront.classList.add('flip-card-front', 'fcf-menu');

    const img = document.createElement('img');
    img.className = 'imagen-producto';
    img.src = producto.imagen;
    img.alt = "Hamburguesa";
    img.id = "imagen-producto";
    flipCardFront.appendChild(img);

    const nombre = document.createElement('p');
    nombre.className = 'titulo-card';
    nombre.innerText = producto.nombre;
    flipCardFront.appendChild(nombre);

    const precio = document.createElement('p');
    nombre.className = 'precio-card';
    precio.className = 'precio';
    precio.innerText = `$${producto.precio}`;
    flipCardFront.appendChild(precio);

    let flipCardBack = document.createElement('div');
    flipCardBack.classList.add('flip-card-back', 'fcb-menu');

    const descripcion = document.createElement('div');
    descripcion.className = 'descripcion-card';
    descripcion.innerHTML = `<p>${producto.nombre}</p><br><p>${producto.descripcion}</p>`;
    flipCardBack.appendChild(descripcion);

    
    flipCardInner.appendChild(flipCardFront);
    flipCardInner.appendChild(flipCardBack);
    flipCard.appendChild(flipCardInner);

    return flipCard;
}

function obtenerPrecio(tarjeta) {
    let precioElemento = tarjeta.querySelector('.precio');
    let precio = parseFloat(precioElemento.textContent.replace('$', ''));
    return precio;
}