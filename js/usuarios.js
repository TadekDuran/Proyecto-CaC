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
            clave: "",
            rol:""
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
                clave: this.clave,
                rol: this.rol
            }
            var options = {
                body:JSON.stringify(usuario),
                method: 'POST',
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
                        throw new Error("Error al crear usuario");
                    }
                })
                .then(data => {
                    alert("Registro grabado");
                    window.location.href = "./usuarios.html";
                })
                .catch(err => {
                    alert(err.message);
                });   
        },
       
        login(event) {
            event.preventDefault();
            dni=this.dni
            
            var i=0
            while ( i < this.usuarios.length && this.usuarios[i].dni != this.dni  ){
                i++
            }
            if (i<(this.usuarios.length)){
                if (this.usuarios[i].clave==this.clave){
                    if (this.usuarios[i].rol=="1"){
                        sessionStorage.setItem("rol", this.usuarios[i].rol)
                        window.location.href = "./usuarios.html";
                    }else{
                        alert('Acceso denegado')
                    }
                                        
                }else{
                    alert('Clave erronea')
                }
            }else{
                alert('Usuario erroneo')
            }
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')