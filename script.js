// Mostrar ventana automáticamente
window.onload = function() {
  document.getElementById("iaWindow").style.display = "flex";
  
  let nombre = localStorage.getItem("nombreUsuario");
  if (!nombre) {
    nombre = prompt("¿Cuál es tu nombre?");
    if (nombre) {
      localStorage.setItem("nombreUsuario", nombre);
      document.getElementById("saludo").innerText = "💗 Hola " + nombre + ", soy Martita";
      document.getElementById("subSaludo").innerText = "Tu compañera de Amor Propio";
    }
  } else {
    document.getElementById("saludo").innerText = "💗 Hola " + nombre + ", soy Martita";
    document.getElementById("subSaludo").innerText = "Tu compañera de Amor Propio";
  }
}

function toggleSection(id) {
  const section = document.getElementById(id);
  section.classList.toggle("hidden");
}

function showText(text) {
  document.getElementById("textBox").innerText = text;
  document.getElementById("textBox").classList.remove("hidden");
  document.getElementById("volverBtn").classList.remove("hidden");
  document.getElementById("sentimientos").classList.add("hidden");
  document.getElementById("reto").classList.add("hidden");
}

function volverMenu() {
  document.getElementById("textBox").classList.add("hidden");
  document.getElementById("volverBtn").classList.add("hidden");
}
