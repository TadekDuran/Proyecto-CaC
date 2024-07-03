// const { createApp } = Vue;

// createApp({
//     data() {
//         return {
//             usuarios: [],
//             url: 'https://burgerqueencac.pythonanywhere.com/usuarios',
//             error: false,
//             cargando: true,
//             id: 0,
//             nombre: "",
//             apellido: "",
//             dni: "",
//             sucursal: "",
//             puesto: "",
//             clave: "",
//             claveNueva: "",
//             rol: ""
//         };
//     },
//     methods: {
//         fetchData(url) {
//             fetch(url)
//                 .then(response => response.json())
//                 .then(data => {
//                     this.usuarios = data;
//                     this.cargando = false;
//                 })
//                 .catch(err => {
//                     console.error(err);
//                     this.error = true;
//                 });
//         },
//         changePass() {
//             let dni = this.dni;
//             let claveNueva = this.claveNueva;

//             let usuario = this.usuarios.find(user => user.dni === dni);

//             if (usuario) {
//                 if (usuario.clave === this.clave) {
//                     if (usuario.rol === "1") {
//                         const url = `${this.url}/${usuario.id}`;
//                         let options = {
//                             method: 'PUT',
//                             headers: {
//                                 'Content-Type': 'application/json'
//                             },
//                             body: JSON.stringify({
//                                 clave: claveNueva
//                             })
//                         };

//                         console.log('URL:', url);
//                         console.log('Options:', options);

//                         fetch(url, options)
//                             .then(response => {
//                                 if (response.ok) {
//                                     alert('Contraseña actualizada correctamente');
//                                     window.location.href = "./login.html";
//                                 } else {
//                                     throw new Error('Error al actualizar contraseña');
//                                 }
//                             })
//                             .catch(error => {
//                                 console.error('Error:', error);
//                                 alert('Hubo un problema al cambiar la contraseña');
//                             });

//                     } else {
//                         alert('Acceso denegado');
//                     }
//                 } else {
//                     alert('Clave erronea');
//                 }
//             } else {
//                 alert('Usuario erroneo');
//             }
//         }
//     },
//     created() {
//         this.fetchData(this.url);
//     }
// }).mount('#app');

const { createApp } = Vue;

createApp({
    data() {
        return {
            usuarios: [],
            url: 'https://burgerqueencac.pythonanywhere.com/usuarios',
            error: false,
            cargando: true,
            id: 0,
            nombre: "",
            apellido: "",
            dni: "",
            sucursal: "",
            puesto: "",
            clave: "",
            claveNueva: "",
            rol: ""
        };
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.cargando = false;
                })
                .catch(err => {
                    console.error(err);
                    this.error = true;
                });
        },
        changePass() {
            let dni = this.dni;
            let claveNueva = this.claveNueva;

            let usuario = this.usuarios.find(user => user.dni === dni);

            if (usuario) {
                if (usuario.clave === this.clave) {
                    if (usuario.rol === "1") {
                        const url = `${this.url}/${usuario.id}/cambiar_clave`;
                        let options = {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                clave: claveNueva
                            })
                        };

                        console.log('URL:', url);
                        console.log('Options:', options);

                        fetch(url, options)
                            .then(response => {
                                if (response.ok) {
                                    alert('Contraseña actualizada correctamente');
                                    window.location.href = "./login.html";
                                } else {
                                    return response.json().then(data => {
                                        throw new Error(data.error || 'Error al actualizar contraseña');
                                    });
                                }
                            })
                            .catch(error => {
                                console.error('Error:', error);
                                alert('Hubo un problema al cambiar la contraseña');
                            });

                    } else {
                        alert('Acceso denegado');
                    }
                } else {
                    alert('Clave erronea');
                }
            } else {
                alert('Usuario erroneo');
            }
        }
    },
    created() {
        this.fetchData(this.url);
    }
}).mount('#app');

