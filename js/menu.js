let contenedorTarjeta = document.querySelector('.card-container');
fetch('../json/menu.json')
.then(response => response.json())
.then(data =>   {
    data.productos.forEach(producto => {
        if (producto.stock) {
            problarMenu(producto);
        }
    });
})
.catch(error => console.log('Error al cargar el JSON', error));

function problarMenu(producto) {
    let tarjeta = document.createElement('article');

    const img = document.createElement('img');
    img.src = producto.imagen;
    img.alt = "Hamburguesa"
    img.id = "imagen-producto"
    tarjeta.appendChild(img);

    const nombre = document.createElement('p');
    nombre.innerText = producto.nombre
    tarjeta.appendChild(nombre);

    const precio = document.createElement('p');
    precio.className = 'precio';
    precio.innerText = `$${producto.precio}`;
    tarjeta.appendChild(precio);

    contenedorTarjeta.appendChild(tarjeta);
}