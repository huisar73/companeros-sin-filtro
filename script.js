function enviarFormulario(event) {
event.preventDefault();

document.getElementById("mensaje-enviado").textContent =
"Gracias por tu mensaje. Pronto te responderemos.";

document.getElementById("formulario").reset();
}