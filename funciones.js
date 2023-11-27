//variables globales
const d = document;
let imgN1 = [
  {
    nombre: "charlie",
    url: "imagenes/charlie.jpg",
  },
  {
    nombre: "nick",
    url: "imagenes/descarga.jpg",
  },
  {
    nombre: "darcy",
    url: "imagenes/Darcy.webp",
  },
  {
    nombre: "tara",
    url: "imagenes/tara.png",
  },
  {
    nombre: "tao",
    url: "imagenes/tao.webp",
  },
  {
    nombre: "elle",
    url: "imagenes/Elle.webp",
  },
  {
    nombre: "charlie",
    url: "imagenes/charlie.jpg",
  },
  {
    nombre: "nick",
    url: "imagenes/descarga.jpg",
  },
  {
    nombre: "darcy",
    url: "imagenes/Darcy.webp",
  },
  {
    nombre: "tara",
    url: "imagenes/tara.png",
  },
  {
    nombre: "tao",
    url: "imagenes/tao.webp",
  },
  {
    nombre: "elle",
    url: "imagenes/Elle.webp",
  },
];
let imgN2 = [
  {
    nombre: "charlie",
    url: "imagenes/charlie.jpg",
  },
  {
    nombre: "nick",
    url: "imagenes/descarga.jpg",
  },
  {
    nombre: "darcy",
    url: "imagenes/Darcy.webp",
  },
  {
    nombre: "tara",
    url: "imagenes/tara.png",
  },
  {
    nombre: "tao",
    url: "imagenes/tao.webp",
  },
  {
    nombre: "elle",
    url: "imagenes/Elle.webp",
  },
  {
    nombre: "charlie",
    url: "imagenes/charlie.jpg",
  },
  {
    nombre: "nick",
    url: "imagenes/descarga.jpg",
  },
  {
    nombre: "darcy",
    url: "imagenes/Darcy.webp",
  },
  {
    nombre: "tara",
    url: "imagenes/tara.png",
  },
  {
    nombre: "tao",
    url: "imagenes/tao.webp",
  },
  {
    nombre: "elle",
    url: "imagenes/Elle.webp",
  },
  {
    nombre: "michael",
    url: "imagenes/michael.png",
  },
  {
    nombre: "michael",
    url: "imagenes/michael.png",
  },
  {
    nombre: "tori",
    url: "imagenes/tori.jpg",
  },
  {
    nombre: "tori",
    url: "imagenes/tori.jpg",
  },
];
let imgN3 = [
  {
    nombre: "charlie",
    url: "imagenes/charlie.jpg",
  },
  {
    nombre: "nick",
    url: "imagenes/descarga.jpg",
  },
  {
    nombre: "darcy",
    url: "imagenes/Darcy.webp",
  },
  {
    nombre: "tara",
    url: "imagenes/tara.png",
  },
  {
    nombre: "tao",
    url: "imagenes/tao.webp",
  },
  {
    nombre: "elle",
    url: "imagenes/Elle.webp",
  },
  {
    nombre: "charlie",
    url: "imagenes/charlie.jpg",
  },
  {
    nombre: "nick",
    url: "imagenes/descarga.jpg",
  },
  {
    nombre: "darcy",
    url: "imagenes/Darcy.webp",
  },
  {
    nombre: "tara",
    url: "imagenes/tara.png",
  },
  {
    nombre: "tao",
    url: "imagenes/tao.webp",
  },
  {
    nombre: "elle",
    url: "imagenes/Elle.webp",
  },
  {
    nombre: "michael",
    url: "imagenes/michael.png",
  },
  {
    nombre: "michael",
    url: "imagenes/michael.png",
  },
  {
    nombre: "tori",
    url: "imagenes/tori.jpg",
  },
  {
    nombre: "tori",
    url: "imagenes/tori.jpg",
  },
  {
    nombre: "aled",
    url: "imagenes/Aled.jpg",
  },
  {
    nombre: "aled",
    url: "imagenes/Aled.jpg",
  },
  {
    nombre: "alice",
    url: "imagenes/Alice.jpg",
  },
  {
    nombre: "alice",
    url: "imagenes/Alice.jpg",
  },
];
let fondoBody = d.querySelector("body");
let tablero = d.querySelector(".tablero");
let imagenNombre = [];
let imagenID = [];
let aciertos = 0;
let intentos = 0;
let totalIntentos = 0;
let tiempo = 60;
let totalTiempo = 0;
let tiempoSobrante = 0;
let nivel = 1;
let mostrarNiv = d.querySelector(".nivel");
let mostrarInt = d.querySelector(".intentos");
let mostrarAci = d.querySelector(".aciertos");
let mostrarTime = d.querySelector(".tiempo");
let mostrarJugador = d.querySelector(".jugador");
let tabla = d.querySelector(".recods tbody");
let btnStart = d.querySelector(".btn-iniciar");
let tiempoTranscurrido;
let imagenNivel;
let estoyJugando = false;
let sonidoGanaste = new Audio("./sonidos/correcto.mp3");
let sonidoPerdiste = new Audio("./sonidos/incorrecto.mp3");

//agregar evento al boton para iniciar el juego
function limpiarTablero() {
  tablero.innerHTML = "";
}

d.addEventListener("DOMContentLoaded", () => {
  fondoBody.classList.add("fondo1")
  mostrarDatos();
});

btnStart.addEventListener("click", function () {
  alert("¡Haz iniciado el juego!");
  limpiarTablero();
  if (estoyJugando == false && nivel == 1) {
    ventanaModal();
  } else if (estoyJugando == false && nivel == 2) {
    estoyJugando = true;
    nivel2();
  } else if (estoyJugando == false && nivel == 3) {
    estoyJugando = true;
    nivel3();
  }
});

//funcion para agregar img al tablero
function agregarImagenes() {
  if (nivel == 1) {
    imagenNivel = imgN1;
  } else if (nivel == 2) {
    imagenNivel = imgN2;
  } else if (nivel == 3) {
    imagenNivel = imgN3;
  }
  //colocar img aleatorias
  imagenNivel.sort(() => Math.random() - 0.5);
  //poner tablero
  imagenNivel.forEach((i) => {
    let div = d.createElement("div");
    div.className = "col-3";
    let img = d.createElement("img");
    img.className = "img-fluid alto-img";
    img.id = imagenNivel.indexOf(i);
    img.src = "imagenes/ocultar.jpg";
    img.addEventListener("click", mostrarImg);
    div.appendChild(img);
    tablero.appendChild(div);
  });
}

//funcion para mostrar las imagenes ocultas
function mostrarImg() {
  let imgID = parseInt(this.getAttribute("id"));
  // Verificar si la imagen ya ha sido acertada
  if (this.src.includes("correcto.png")) {
    alert("Ya seleccionaste esta imagen correctamente. Elige otra.");
    return;
  }
  // Verificar si se ha elegido la misma imagen
  if (imagenID.includes(imgID)) {
    alert("Debes escoger una imagen diferente.");
    intentos++;
    mostrarInt.textContent = intentos;
    return;
  }

  this.src = imagenNivel[imgID].url;
  imagenNombre.push(imagenNivel[imgID].nombre);
  imagenID.push(imgID);

  if (imagenNombre.length == 2) {
    setTimeout(compararImg, 200);
  }
}

//funcion para comparar imagenes
function compararImg() {
  let imgTablero = d.querySelectorAll(".tablero  div  img");
  if (imagenNombre[0] == imagenNombre[1]) {
    // alert("¡Felicitaciones adivinaste una imagen!");
    imgTablero[imagenID[0]].src = "imagenes/correcto.png";
    imgTablero[imagenID[1]].src = "imagenes/correcto.png";
    aciertos++;
    mostrarAci.textContent = aciertos;
  } else {
    // alert("Fallaste las imagenes son diferentes");
    imgTablero[imagenID[0]].src = "imagenes/ocultar.jpg";
    imgTablero[imagenID[1]].src = "imagenes/ocultar.jpg";
    intentos++;
    mostrarInt.textContent = intentos;
  }

  imagenNombre = [];
  imagenID = [];

  //comprobar si adivinaron todas la img
  if (nivel == 1 && aciertos == 6) {
    alert("🎉🎖️¡Felicitaciones pasaste al siguiente nivel!🎖️🎉");
    totalIntentos += intentos;
    totalTiempo += tiempo;
    tiempoSobrante += 60 - tiempo;
    obtenerDatos();
    sonidoGanaste.play();
    nivel++;
    mostrarNiv.textContent = nivel;
    intentos = 0;
    mostrarInt.textContent = intentos;
    aciertos = 0;
    mostrarAci.textContent = aciertos;
    clearInterval(tiempoTranscurrido);
    tiempo = 50;
    mostrarTime.textContent = tiempo;
    estoyJugando = false;
  } else if (nivel == 2 && aciertos == 8) {
    alert("🎉🎖️¡Felicitaciones pasaste al siguiente nivel!🎖️🎉");
    sonidoGanaste.play();
    clearInterval(tiempoTranscurrido);
    nivel++;
    mostrarNiv.textContent = nivel;
    intentos = 0;
    mostrarInt.textContent = intentos;
    aciertos = 0;
    mostrarAci.textContent = aciertos;
    clearInterval(tiempoTranscurrido);
    tiempo = 45;
    mostrarTime.textContent = tiempo;
    estoyJugando = false;
  } else if (nivel == 3 && aciertos == 10) {
    alert("🎉🎖️¡Felicitaciones ganaste el juego!🎖️🎉");
    sonidoGanaste.play();
    location.reload();
  }
}

function nivel1() {
  //agregar las imagenes al tablero
  agregarImagenes();
  //mostrat nivel
  mostrarNiv.textContent = nivel;
  tiempoJuego();
}

function nivel2() {
  //agregar las imagenes al tablero
  agregarImagenes();
  //mostrat nivel
  tiempoJuego();
}

function nivel3() {
  //agregar las imagenes al tablero
  agregarImagenes();
  //mostrat nivel
  tiempoJuego();
}

function tiempoJuego() {
  //controlar el tiempo
  tiempoTranscurrido = setInterval(() => {
    tiempo--;
    mostrarTime.textContent = tiempo;
    if (tiempo == 10) {
      alert("¡Rapido el tiempo se esta agotando¡🤯!Tienes 10s¡");
      mostrarTime.style.color = "red";
      mostrarTime.style.fontSize = "25px";
    } else if (tiempo == 0) {
      alert("El tiempo se agoto🥱😵¡Ha perdido!🥱😵");
      sonidoPerdiste.play();
      clearInterval(tiempoTranscurrido);
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  }, 1000);
}

//mostrar ventana modal
function ventanaModal() {
  let mostrarModal = d.querySelector("#exampleModal");
  let cerrarModal = d.querySelectorAll(".cerrar");
  let inputJugador = d.querySelector(".nombre-jugador");
  let btnJugador = d.querySelector(".registrar-jugador");
  //evento click al boton gris
  cerrarModal.forEach((btn) => {
    btn.addEventListener("click", () => {
      mostrarModal.classList.remove("show");
      mostrarModal.style.display = "none";
    });
  });
  mostrarModal.classList.add("show");
  mostrarModal.style.display = "block";
  //evento click al boton azul modal
  btnJugador.addEventListener("click", () => {
    //mostrar nombre jugador tablero
    mostrarJugador.textContent = inputJugador.value;
    //cerrar modal
    mostrarModal.classList.remove("show");
    mostrarModal.style.display = "none";
    //iniciar niv1
    estoyJugando = true;
    nivel1();
  });
}
