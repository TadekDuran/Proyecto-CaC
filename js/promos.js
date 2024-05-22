let contenedorTarjetaPromos = document.querySelector('.promos');
fetch('../json/promos.json')
.then(response => response.json())
.then(data =>   {
    data.promos.forEach(producto => {
        if (producto.stock) {
            problarPromos(producto);
        }
    });
})
.catch(error => console.log('Error al cargar el JSON', error));

function problarPromos(producto) {
    
    
    let tarjeta = document.createElement('article');
    tarjeta.className = 'tarjeta-promo';

    const img = document.createElement('img');
    img.className = 'imagen-promo';
    img.src = producto.imagen;
    img.alt = "Hamburguesa";
    img.id = "imagen-promo";
    tarjeta.appendChild(img);

    const nombre = document.createElement('p');
    nombre.className = 'titulo-card';
    nombre.innerText = producto.nombre;
    tarjeta.appendChild(nombre);

    const descripcion = document.createElement('p');
    nombre.className = 'descripcion-card';
    descripcion.innerText = producto.descripcion;
    tarjeta.appendChild(descripcion);

    const precio = document.createElement('p');
    nombre.className = 'precio-card';
    precio.innerText = `$${producto.precio}`;
    tarjeta.appendChild(precio);

    contenedorTarjetaPromos.appendChild(tarjeta);
}