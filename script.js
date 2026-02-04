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

