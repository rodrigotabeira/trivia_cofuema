//tomo los elementos del html
const nombre = document.querySelector("#nombre");
const cedula = document.querySelector("#cedula");
const btnComenzar = document.querySelector("#comenzar");

//Agrego un event listener clic al botòn comenzar
btnComenzar.addEventListener("click",()=>{
    //seteo los valores del local storage que serán neceasarios en las otras pàginas
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("cedula", cedula.value);
    localStorage.setItem("puntaje-total",0);
    localStorage.removeItem("categorias-jugadas");
    
    //lo redirijo a la parte del menú
    location.href="menu.html";
});
// Limitar la cédula a 8 dígitos
cedula.addEventListener('input', () => {
    // Si la longitud de la cédula es mayor a 8, cortar el valor
    if (cedula.value.length > 8) {
        cedula.value = cedula.value.slice(0, 8);
    }
});