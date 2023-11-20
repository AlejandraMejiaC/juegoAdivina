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
let tablero = d.querySelector(".tablero");
let imagenNombre = [];
let imagenID = [];
let aciertos = 0;
let intentos = 0;
let tiempo = 60;
let nivel = 1;
let mostrarNiv = d.querySelector(".nivel");
let mostrarInt = d.querySelector(".intentos");
let mostrarAci = d.querySelector(".aciertos");
let mostrarTime = d.querySelector(".tiempo");
let btnStart = d.querySelector(".btn-iniciar");
let tiempoTranscurrido;
let imagenNivel

//agregar evento al boton para iniciar el juego
function limpiarTablero() {
  tablero.innerHTML = "";
}
btnStart.addEventListener("click", function () {
  alert("¡Haz iniciado el juego!");
  limpiarTablero();
  //controlar el tiempo
  //se ejecuta en determinado timpo infinitamente
  tiempoTranscurrido = setInterval(() => {
    tiempo--;
    if (nivel === 2) {
      tiempo--;
    }
    mostrarTime.textContent = tiempo;
    if (tiempo == 10) {
      alert("¡Rapido el tiempo se esta agotando¡🤯!Tienes 10s¡");
      mostrarTime.style.color = "red";
      mostrarTime.style.fontSize = "25px";
    } else if (tiempo == 0) {
      alert("El tiempo se agoto🥱😵¡Ha perdido!🥱😵");
      clearInterval(tiempoTranscurrido);
      location.reload();
    }
  }, 1000);

  //agregar las imagenes al tablero
  agregarImagenes();
  //mostrat nivel
  mostrarNiv.textContent = nivel;
});

//funcion para agregar img al tablero
function agregarImagenes() {
  if(nivel == 1){
    imagenNivel = imgN1
    imagenNivel.forEach((i) => {
      let div = d.createElement("div")
      div.className = "col-3"
      let img = d.createElement("img")
      img.className = "img-fluid alto-img"
      img.id = imagenNivel.indexOf(i)
      img.src = "imagenes/ocultar.jpg"
      img.addEventListener("click", mostrarImg)
      div.appendChild(img)
      tablero.appendChild(div)
    });
  } else if (nivel == 2){
    imagenNivel = imgN2
    imagenNivel.forEach((i) => {
      let div = d.createElement("div")
      div.className = "col-3"
      let img = d.createElement("img")
      img.className = "img-fluid alto-img"
      img.id = imagenNivel.indexOf(i)
      img.src = "imagenes/ocultar.jpg"
      img.addEventListener("click", mostrarImg)
      div.appendChild(img)
      tablero.appendChild(div)
    });
  }
}

//funcion para mostrar las imagenes ocultas
function mostrarImg() {
  let imgID = parseInt(this.getAttribute("id"))
  // Verificar si la imagen ya ha sido acertada
  if (this.src.includes("correcto.png")) {
    alert("Ya seleccionaste esta imagen correctamente. Elige otra.")
    return
  }

  // Verificar si se ha elegido la misma imagen
  if (imagenID.includes(imgID)) {
    alert("Debes escoger una imagen diferente.")
    intentos++;
    mostrarInt.textContent = intentos
    return
  }

  this.src = imagenNivel[imgID].url
  imagenNombre.push(imagenNivel[imgID].nombre)
  imagenID.push(imgID)

  if (imagenNombre.length == 2) {
    setTimeout(compararImg, 200)
  }
}

//funcion para comparar imagenes
function compararImg() {
  let imgTablero = d.querySelectorAll(".tablero  div  img")
  if (imagenNombre[0] == imagenNombre[1]) {
    alert("¡Felicitaciones adivinaste una imagen!")
    imgTablero[imagenID[0]].src = "imagenes/correcto.png"
    imgTablero[imagenID[1]].src = "imagenes/correcto.png"
    aciertos++
    mostrarAci.textContent = aciertos
  } else {
    alert("Fallaste las imagenes son diferentes");
    imgTablero[imagenID[0]].src = "imagenes/ocultar.jpg"
    imgTablero[imagenID[1]].src = "imagenes/ocultar.jpg"
    intentos++
    mostrarInt.textContent = intentos
  }

  imagenNombre = []
  imagenID = []

  //comprobar si adivinaron todas la img
  if (nivel == 1 && aciertos == 6) {
    alert("🎉🎖️¡Felicitaciones pasaste al siguiente nivel!🎖️🎉")
    nivel++
    mostrarNiv.textContent = nivel
    intentos = 0
    mostrarInt.textContent = intentos
    aciertos = 0
    mostrarAci.textContent = aciertos
    clearInterval(tiempoTranscurrido)
    tiempo = 50
    mostrarTime.textContent = tiempo
  } else if (nivel == 2 && aciertos == 8) {
    alert("🎉🎖️¡Felicitaciones pasaste al siguiente nivel!🎖️🎉")
  }
}
