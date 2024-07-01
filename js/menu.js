const { createApp } = Vue;

createApp({
	data() {
		return {
			productos: [],
			url: "https://burgerqueencac.pythonanywhere.com/productos",
			error: false,
			cargando: true,
			// atributos para guardar los valores del formulario
			id: 0,
			nombre: "",
			precio: "",
			stock: "",
			imagen: "",
			descripcion: "",
			tarjetas: [],
		};
	},
	methods: {
		fetchData(url) {
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					this.productos = data.filter((producto) => producto.stock === "True");
                    console.log(this.productos);
					this.cargando = false;
					this.productos.forEach((producto) => {
                        this.tarjetas.push(this.problarArray(producto));
					});
					this.precioMenor();
				})
				.catch((err) => {
					console.error(err);
					this.error = true;
				});
		},
		problarArray(producto) {
			let flipCard = document.createElement("div");
			flipCard.classList.add("flip-card", "fc-menu");

			let flipCardInner = document.createElement("div");
			flipCardInner.classList.add("flip-card-inner", "fci-menu");

			let flipCardFront = document.createElement("div");
			flipCardFront.classList.add("flip-card-front", "fcf-menu");

			const img = document.createElement("img");
			img.className = "imagen-producto";
			img.src = producto.imagen;
			img.alt = "Hamburguesa";
			img.id = "imagen-producto";
			flipCardFront.appendChild(img);

			const nombre = document.createElement("p");
			nombre.className = "titulo-card";
			nombre.innerText = producto.nombre;
			flipCardFront.appendChild(nombre);

			const precio = document.createElement("p");
			precio.className = "precio-card";
			precio.className = "precio";
			precio.innerText = `$${producto.precio}`;
			flipCardFront.appendChild(precio);

			let flipCardBack = document.createElement("div");
			flipCardBack.classList.add("flip-card-back", "fcb-menu");

			const descripcion = document.createElement("div");
			descripcion.className = "descripcion-card";
			descripcion.innerHTML = `<p>${producto.nombre}</p><br><p>${producto.descripcion}</p>`;
			flipCardBack.appendChild(descripcion);

			flipCardInner.appendChild(flipCardFront);
			flipCardInner.appendChild(flipCardBack);
			flipCard.appendChild(flipCardInner);

			return flipCard;
		},
		precioMayor() {
			this.tarjetas.sort(
				(a, b) => this.obtenerPrecio(b) - this.obtenerPrecio(a)
			);
			this.destacarFiltro("precio-mayor");
			this.actualizarTarjetas();
		},
		precioMenor() {
			this.tarjetas.sort(
				(a, b) => this.obtenerPrecio(a) - this.obtenerPrecio(b)
			);
			this.destacarFiltro("precio-menor");
			this.actualizarTarjetas();
		},
		obtenerPrecio(tarjeta) {
			let precioElemento = tarjeta.querySelector(".precio");
			let precio = parseFloat(
				precioElemento.textContent.replace("$", "")
			);
			return precio;
		},
		actualizarTarjetas() {
			let contenedorTarjeta = document.querySelector(".card-grid");
			contenedorTarjeta.innerHTML = "";
			this.tarjetas.forEach((tarjeta) =>
				contenedorTarjeta.appendChild(tarjeta)
			);
		},
		destacarFiltro(filtro) {
			const filtroMayor = document.querySelector(".precio-mayor");
			const filtroMenor = document.querySelector(".precio-menor");

			if (filtro === "precio-mayor") {
				filtroMayor.classList.add("filter-active");
				filtroMenor.classList.remove("filter-active");
			} else if (filtro === "precio-menor") {
				filtroMayor.classList.remove("filter-active");
				filtroMenor.classList.add("filter-active");
			}
		},
	},
	created() {
		this.fetchData(this.url);
	},
	mounted() {
		document
			.querySelector(".precio-mayor")
			.addEventListener("click", () => this.precioMayor());
		document
			.querySelector(".precio-menor")
			.addEventListener("click", () => this.precioMenor());
	},
}).mount("#app");
