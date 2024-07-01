const { createApp } = Vue;
createApp({
	data() {
		return {
			productos: [],

			url: "https://burgerqueencac.pythonanywhere.com/productos",
			error: false,
			cargando: true,
			/*atributos para el guardar los valores del formulario */
			id: 0,
			nombre: "",
			precio: "",
			stock: "",
			imagen: "",
			descripcion: "",
		};
	},
	methods: {
		fetchData(url) {
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					this.productos = data;
					this.cargando = false;
				})
				.catch((err) => {
					console.error(err);
					this.error = true;
				});
		},
		eliminar(id) {
			const url = this.url + "/" + id;
			var options = {
				method: "DELETE",
			};
			fetch(url, options)
				.then((res) => res.text()) // or res.json()
				.then((res) => {
					alert("Registro Eliminado");
					location.reload(); // recarga el json luego de eliminado el registro
				});
		},
		grabar() {
			let producto = {
				nombre: this.nombre,
				precio: this.precio,
				stock: this.stock,
				imagen: this.imagen,
				descripcion: this.descripcion,
			};
			var options = {
				body: JSON.stringify(producto),
				method: "POST",
				headers: { "Content-Type": "application/json" },
				redirect: "follow",
			};
			fetch(this.url, options)
				.then(function () {
					alert("Registro grabado");
					window.location.href = "./productos.html"; // recarga productos.html
				})
				.catch((err) => {
					console.error(err);
					alert("Error al Grabar"); // puedo mostrar el error tambien
				});
		},
	},
	created() {
		this.fetchData(this.url);
	},
}).mount("#app");