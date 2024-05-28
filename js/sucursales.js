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
  created() {  
    this.fetchData(this.url)
  }
  }).mount('#app')
  
  