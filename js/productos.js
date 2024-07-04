const { createApp } = Vue;

createApp({
    data() {
        return {
            productos: [],
            url: "https://burgerqueencac.pythonanywhere.com/productos",
            error: false,
            cargando: true,
            id: 0,
            nombre: "",
            precio: "",
            stock: "",
            imagen: "",
            descripcion: "",
            sortKey: "",
            sortAsc: true
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
        sort(key) {
            if (this.sortKey === key) {
                this.sortAsc = !this.sortAsc;
            } else {
                this.sortKey = key;
                this.sortAsc = true;
            }
        }
    },
    computed: {
        sortedProductos() {
            return this.productos.slice().sort((a, b) => {
                let modifier = this.sortAsc ? 1 : -1;
                if (a[this.sortKey] < b[this.sortKey]) return -1 * modifier;
                if (a[this.sortKey] > b[this.sortKey]) return 1 * modifier;
                return 0;
            });
        }
    },
    created() {
        this.fetchData(this.url);
    }
}).mount("#app");
