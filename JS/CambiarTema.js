document.addEventListener("DOMContentLoaded", function() {
    // Tu código aquí
const toggleButton = document.getElementById("theme-toggle");


toggleButton.addEventListener("click", () => {
 document.body.classList.toggle("light");
 document.body.classList.toggle("dark");

 // Desvanece la imagen
 toggleImage.style.opacity = 0;

 // Cambia la imagen después de un pequeño retraso
 setTimeout(() => {
     if (document.body.classList.contains("light")) {
         toggleImage.src = "LunaV1.png";
         toggleImage.alt = "Modo Oscuro";
     } else {
         toggleImage.src = "SolV1.png";
         toggleImage.alt = "Modo Claro";
     }

     // Vuelve a mostrar la imagen
     toggleImage.style.opacity = 1;
 }, 500); // El retraso debe ser igual a la duración de la transición CSS
});
});
