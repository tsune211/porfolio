document.getElementById("idiomas").addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir la acción predeterminada del enlace
    var opcionesIdioma = document.querySelector(".opciones-idioma");
  
    if (opcionesIdioma.style.display === "none" || opcionesIdioma.style.display === "") {
      opcionesIdioma.style.display = "block";
    } else {
      opcionesIdioma.style.display = "none";
    }
  });
  