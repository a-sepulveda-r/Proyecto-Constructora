// Validación del formulario de contacto usando JavaScript
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var rut = document.getElementById("rut").value;
    var nombre = document.getElementById("nombre").value;
    var direccion = document.getElementById("direccion").value;
    var comuna = document.getElementById("comuna").value;
    var mensaje = document.getElementById("mensaje").value;
    var response = document.getElementById("response");

    // Validar que todos los campos estén completos
    if (
      rut === "" ||
      nombre === "" ||
      direccion === "" ||
      comuna === "" ||
      mensaje === ""
    ) {
      response.innerHTML = "Por favor complete todos los campos.";
      response.className = "error";
    } else {
      // Enviar el formulario a través de AJAX o cualquier otra lógica que desees
      // Aquí puedes agregar la lógica para enviar el formulario a través de AJAX o cualquier otra forma que desees

      // Ejemplo de cómo mostrar un mensaje de éxito
      response.innerHTML = "¡Formulario enviado con éxito!";
      response.className = "success";
    }
  });
