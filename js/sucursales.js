const { createApp } = Vue
  createApp({
    data() {
      return {
        url: "./json/sucursales.json",
        datos: [],
        error: false,
      }
    },
    methods: {
      fetchData(url) {
        fetch(url)
          .then(response => response.json())
          .then(
            data => {
              console.log(data.sucursales)
              this.datos = data.sucursales
            }
          )
          .catch(error => {
            console.log("Error:" + error)
            this.error = true
          });
      }
    },   
  created() {  // created() se ejecuta cada vez que se crea el objeto VUE acá se dice cuál de todos los métodos se va a ejecutar el comienzo
    this.fetchData(this.url)
  }
  }).mount('#app')
  
  