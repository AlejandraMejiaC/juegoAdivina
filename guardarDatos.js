//variable globales
let nombreJugador = d.querySelector(".jugador");
let listaJugadores = "jugadores";

//funcion para obtener los datos
function obtenerDatos() {
  let datosJugador = {
    "nombre": nombreJugador.textContent,
    "intentos": totalIntentos,
    "tiempoTotal": totalTiempo,
    "tiempoSobrante": tiempoSobrante,
  };
  console.log (datosJugador)
  //pasar los datos del jugadoer 
  guardarDatos(datosJugador)
}

//funcion para guardar los datos en local storage
function guardarDatos(datos){
    //array para los datos antiguos y nuevos
    let jugadores = []
    // tomar los datos en localstorage previamente guardados
    let datosPrevios = JSON.parse(localStorage.getItem(listaJugadores))
    if (datosPrevios != null){
        jugadores = datosPrevios
    }
    //guardar el nuevo jugador en el array
    jugadores.push(datos)
    //guardar todos los datos en el localstorage
    localStorage.setItem(listaJugadores, JSON.stringify(jugadores))
}

function mostrarDatos(){
    let jugadores = []
    // tomar los datos en localstorage previamente guardados
    let datosPrevios = JSON.parse(localStorage.getItem(listaJugadores))
    if (datosPrevios != null){
        jugadores = datosPrevios
    }
    jugadores.sort((a,b)=>{
        if(a.tiempoTotal < b.tiempoTotal){
            return -1
        }
        if (a.intentos < b.intentos){
            return 1
        }
    })
    jugadores.forEach((jugador, i) => {
        let fila = d.createElement("tr")
        fila.innerHTML = `
         <td><h5>${i+1}</h5></td>
         <td><h5>${jugador.nombre}</h5></td>
         <td><h5>${jugador.tiempoTotal}</h5></td>
         <td><h5>${jugador.intentos}</h5></td>
         <td><h5>${jugador.tiempoSobrante}</h5></td>
        `
        tabla.appendChild(fila)
    });

}