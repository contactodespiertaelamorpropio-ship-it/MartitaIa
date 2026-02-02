// Flujo de emociones y retos
const flow = {
  rabia: "La rabia contiene energía no expresada 😡 Respira profundo y libera tensión en tus hombros. No te juzgues.",
  enojo: "El enojo surge cuando sientes que cruzaron tus límites 🔥 Reconoce tu valor y regresa al centro.",
  impotencia: "La impotencia aparece cuando pierdes sensación de control 😞 Hoy elige una pequeña acción que sí dependa de ti.",
  alegria: "Qué hermoso sentir alegría 😊 Guarda este momento como ancla emocional positiva.",
  felicidad: "La felicidad es expansión emocional 🥰 Permítete disfrutar sin culpa.",
  fracaso: "El fracaso no define tu valor 💔 Define tu aprendizaje. Estás creciendo aunque no lo veas aún.",
  rechazo: "El rechazo duele porque activa heridas profundas 🚫 Recuerda: tu valor no depende de aprobación externa.",
  decepcion: "La decepción aparece cuando tus expectativas no se cumplen 😔 Hoy elige soltar el control y cuidarte.",
  verguenza: "La vergüenza es una emoción social aprendida 😳 No eres tu error. Eres tu proceso.",
  timidez: "La timidez no es debilidad 🙈 Es sensibilidad. Avanza a tu ritmo con amor.",
  reto: "Dirígete al ejercicio del día y continúa fortaleciendo tu amor propio 💗",
  refuerzo: "Estoy orgullosa de ti 💫 Cada paso consciente transforma tu relación contigo misma."
};

// Lista de emociones
const emociones = [
  {label:"😡 Rabia", key:"rabia"},
  {label:"🔥 Enojo", key:"enojo"},
  {label:"😞 Impotencia", key:"impotencia"},
  {label:"😊 Alegría", key:"alegria"},
  {label:"🥰 Felicidad", key:"felicidad"},
  {label:"💔 Fracaso", key:"fracaso"},
  {label:"🚫 Rechazo", key:"rechazo"},
  {label:"😔 Decepción", key:"decepcion"},
  {label:"😳 Vergüenza", key:"verguenza"},
  {label:"🙈 Timidez", key:"timidez"}
];

// Lista del reto de 30 días
const retos = [
  "Día 1: Escribe 3 cosas que agradeces.",
  "Día 2: Haz una pausa consciente de 5 minutos.",
  "Día 3: Regálate un cumplido frente al espejo.",
  "Día 4: Camina 10 minutos observando tu entorno.",
  "Día 5: Escribe una meta pequeña y cúmplela."
  // Puedes seguir agregando hasta 30
];

// Guardar nombre del usuario
let userName = localStorage.getItem("userName");

window.onload = () => {
  if (!userName) {
    userName = prompt("Hola 💗 Soy Martita, ¿cómo te llamas?");
    localStorage.setItem("userName", userName);
  }
  document.getElementById("welcome").innerHTML = `<p>Bienvenida/o <b>${userName}</b> 💗 Estoy aquí para acompañarte.</p>`;
  cargarBotones();
};

// Crear botones dinámicos
function cargarBotones() {
  const feelingsList = document.getElementById("feelings");
  emociones.forEach(e => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = e.label;
    btn.onclick = () => mostrarTexto(flow[e.key]);
    li.appendChild(btn);
    feelingsList.appendChild(li);
  });

  const retoList = document.getElementById("reto30");
  retos.forEach((r, i) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = `Día ${i+1}`;
    btn.onclick = () => mostrarTexto(r);
    li.appendChild(btn);
    retoList.appendChild(li);
  });
}

// Mostrar texto
function mostrarTexto(texto) {
  document.getElementById("response").innerText = texto;
  document.getElementById("volverBtn").classList.remove("hidden");
}

// Volver al menú
function volverMenu() {
  document.getElementById("response").innerText = "";
  document.getElementById("volverBtn").classList.add("hidden");
}

// Toggle secciones
function toggleSection(id) {
  const section = document.getElementById(id);
  section.classList.toggle("hidden");
}
