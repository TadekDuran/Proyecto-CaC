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
        rol: ""
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
                    this.rol=data.rol;
                                    
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
                clave:this.clave,
                rol:this.rol
            }
            var options = {
                body: JSON.stringify(usuario),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
              
            fetch(this.url, options)
                .then(response => {
                    if (response.status === 201) {
                        return response.json();
                    } else if (response.status === 409) {
                        throw new Error("DNI ya existe en la base de datos");
                    } else {
                        throw new Error("Error al modificar usuario");
                    }
                })
                .then(data => {
                    alert("Registro grabado");
                    window.location.href = "./usuarios.html";
                })
                .catch(err => {
                    alert(err.message);
                });
                
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')