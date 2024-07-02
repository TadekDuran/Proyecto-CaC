document.addEventListener("DOMContentLoaded", function() {
    const rol = sessionStorage.getItem("rol");
    if (rol) {
        // Redirigir a usuarios.html si el usuario ya ha iniciado sesión
        window.location.href = "./usuarios.html";
    }
});