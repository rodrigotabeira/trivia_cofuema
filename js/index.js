// Tomo los elementos del html
const nombre = document.querySelector("#nombre");
const cedula = document.querySelector("#cedula");
const btnComenzar = document.querySelector("#comenzar");

// Limitar la cédula a 8 dígitos
cedula.addEventListener('input', () => {
    if (cedula.value.length > 8) {
        cedula.value = cedula.value.slice(0, 8);
    }
});

// Validación antes de comenzar
btnComenzar.addEventListener("click", () => {
    const nombreValor = nombre.value.trim();
    const cedulaValor = cedula.value.trim();

    if (nombreValor === "" || cedulaValor === "") {
        alert("⚠️ Por favor, completa todos los campos antes de comenzar.");
        return; // Detiene la ejecución si faltan datos
    }

    // Si los campos están completos, guardamos en localStorage
    localStorage.setItem("nombre", nombreValor);
    localStorage.setItem("cedula", cedulaValor);
    localStorage.setItem("puntaje-total", 0);
    localStorage.removeItem("categorias-jugadas");

    // Redirigir al menú
    location.href = "menu.html";
});
