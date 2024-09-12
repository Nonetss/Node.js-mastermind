import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cuestiones = [
  {
    pregunta: "¿Cuál es tu color favorito?",
    opciones: ["Rojo", "Verde", "Azul", "Amarillo"],
  },
  {
    pregunta: "¿Qué tipo de música prefieres?",
    opciones: ["Rock", "Pop", "Jazz", "Clásica"],
  },
  {
    pregunta: "¿Cuál es tu deporte favorito?",
    opciones: ["Fútbol", "Baloncesto", "Tenis", "Natación"],
  },
  {
    pregunta: "¿Qué país te gustaría visitar?",
    opciones: ["Japón", "Francia", "Australia", "Brasil"],
  },
  {
    pregunta: "¿Cuántos libros lees al año?",
    opciones: ["1", "2-5", "6-10", "Más de 10"],
  },
];

const respuestas = [];

function realizarPreguntas(i) {
  if (i < cuestiones.length) {
    const { pregunta, opciones } = cuestiones[i];
    console.log(`\n ${i + 1}. ${pregunta}`);
    for (let j = 0; j < opciones.length; j++) {
      const posiblesRespuestas = opciones[j];
      console.log(`${j + 1}. ${posiblesRespuestas}`);
    }

    rl.question(
      "Selecciona una opción (número): ",
      function (respuestaUsuario) {
        const respuestaSeleccionada = parseInt(respuestaUsuario) - 1;

        if (
          respuestaSeleccionada < 0 ||
          respuestaSeleccionada >= opciones.length
        ) {
          console.log("Opción no válida. Intenta de nuevo.");
          realizarPreguntas(i);
        } else {
          respuestas.push(opciones[respuestaSeleccionada]);
          realizarPreguntas(i + 1);
        }
      },
    );
  } else {
    mostrarResultados();
  }
}

function mostrarResultados() {
  console.log("\nResumen de tus respuestas:");
  for (let i = 0; i < cuestiones.length; i++) {
    console.log(`${cuestiones[i].pregunta}: ${respuestas[i]}`);
  }
  rl.close();
}

console.log("Bienvenido a la encuesta. Responde a las siguientes preguntas.");
realizarPreguntas(0);
