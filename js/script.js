// Contador de visitas
document.addEventListener("DOMContentLoaded", function() {
  let visitas = localStorage.getItem("visitas");
  if (visitas == null) {
    visitas = 0;
  }
  visitas++;
  localStorage.setItem("visitas", visitas);
  console.log("Cantidad de visitas: " + visitas);

  // Calculadora de presupuesto
  let boton = document.getElementById("calcular");

  if (boton) {
    boton.addEventListener("click", function() {
      let personas = Number(document.getElementById("personas").value);
      let dias = Number(document.getElementById("dias").value);
      let resultado = document.getElementById("resultado");

      if (personas < 1 || dias < 1) {
        resultado.textContent = "Ingresá una cantidad válida.";
      } else {
        let total = personas * dias * 50000;
        resultado.textContent = "El presupuesto aproximado es: $" + total.toLocaleString("es-AR");
      }
    });
  }

  // Formulario de contacto
  let formulario = document.getElementById("form-contacto");

  if (formulario) {
    formulario.addEventListener("submit", function(evento) {
      evento.preventDefault();
      let nombre = document.getElementById("nombre").value;
      document.getElementById("mensaje-formulario").textContent =
        "¡Gracias " + nombre + "! Recibimos tu mensaje.";
      formulario.reset();
    });
  }
});
