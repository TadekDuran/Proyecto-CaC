const { createApp } = Vue
createApp({
    data() {
        return {
            usuarios:[],
            url:'https://burgerqueencac.pythonanywhere.com/usuarios',   
            error:false,
            cargando:true,
            /*atributos para el guardar los valores del formulario */
            id:0,
            nombre:"", 
            apellido:"",
            dni:"",
            sucursal:"",
            puesto: "",
            clave: ""
        }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        eliminar(id) {
            const url = this.url+'/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
			        alert('Registro Eliminado');
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        grabar(){
            let usuario = {
                nombre:this.nombre,
                apellido: this.apellido,
                dni: this.dni,
                sucursal:this.sucursal,
                puesto: this.puesto,
                clave: this.clave
            }
            var options = {
                body:JSON.stringify(usuario),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./usuarios.html";  // recarga la pagina
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })      
        },
        modificar() {
            let usuario = {
                nombre:this.nombre,
                apellido: this.apellido,
                dni: this.dni,
                sucursal: this.sucursal,
                puesto: this.puesto,
                clave: this.clave
            }
            var options = {
                body: JSON.stringify(usuario),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./usuarios.html";         
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        },
        login() {
            const loginUrl = 'https://burgerqueencac.pythonanywhere.com/login';
            const credentials = {
                dni: this.dni,
                clave: this.clave
            };
            var options = {
                body: JSON.stringify(credentials),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            };
            fetch(loginUrl, options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Login failed');
                    }
                    return response.json();
                })
                .then(data => {
                    alert("Login successful");
                    localStorage.setItem('token', data.token);
                    window.location.href = "./productos.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al iniciar sesión");
                });
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')