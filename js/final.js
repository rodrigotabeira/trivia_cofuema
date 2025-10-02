const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
const nombreJugador = document.querySelector("#nombre-jugador");
const puntajeFinal = document.querySelector("#puntaje-final");
const btnComenar = document.querySelector("#btn-comenzar")

nombre.innerHTML = localStorage.getItem("nombre");
nombreJugador.innerHTML = localStorage.getItem("nombre");
txtPuntaje.innerHTML = parseInt(localStorage.getItem("puntaje-total"));
puntajeFinal.innerHTML = parseInt(localStorage.getItem("puntaje-total")) + " Puntos";


btnComenar.addEventListener("click", () => {
    location.href = "index.html";
});
fetch('https://cofuema.uy/trivia/guardar_puntaje.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'nombre=' + encodeURIComponent(localStorage.getItem("nombre")) +
          '&puntaje=' + encodeURIComponent(localStorage.getItem("puntaje-total"))
})
.then(response => response.text())
.then(data => {
    console.log('Respuesta del servidor:', data);
})
.catch(error => console.error('Error al guardar:', error));

