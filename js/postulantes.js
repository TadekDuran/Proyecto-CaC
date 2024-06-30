const { createApp } = Vue
  createApp({
    data() {
      return {
        postulantes:[],
        
        url:'https://burgerqueencac.pythonanywhere.com/postulantes',   
        error:false,
        cargando:true,
        /*atributos para el guardar los valores del formulario */
        id:0,
        nombre:"", 
        apellido:"",
        provincia:"",
        movilidad:"",
        cv:"",
        comentario:""
    }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.postulantes = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        grabar(){
            let postulante = {
                nombre:this.nombre,
                apellido: this.apellido,
                provincia: this.provincia,
                movilidad:this.movilidad,
                cv: this.cv,
                comentario: this.comentario
            }
            var options = {
                body:JSON.stringify(postulante),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./postulantes.html";  
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar") 
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
			 alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
    
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')