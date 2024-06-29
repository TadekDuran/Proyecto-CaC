console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // producto_update.html?id=1
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        id:0,
        nombre:"",
        apellido:"",
        dni:0,
        sucursal:"",
        puesto:"",
        clave:"",
        url:'https://burgerqueencac.pythonanywhere.com/usuarios/'+id,
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id=data.id;
                    this.nombre = data.nombre;
                    this.apellido=data.apellido;                    
                    this.dni=data.dni;
                    this.sucursal=data.sucursal;
                    this.puesto=data.puesto;
                    this.clave=data.clave;
                                    
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            let usuario = {
                nombre:this.nombre,
                apellido: this.apellido,
                dni: this.dni,
                sucursal: this.sucursal,
                puesto:this.puesto,
                clave:this.clave
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
                    window.location.href = "./usuarios.html"; // navega a productos.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')