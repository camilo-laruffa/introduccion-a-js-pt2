//* Seleccionar contenido HTML

// querySelector 0 O 1 elemento
const heading = document.querySelector(".header__texto h2");
heading.textContent = "Soy un heading";

// querySelectorAll 0 o Todos los elementos
const links = document.querySelectorAll("a");
links.forEach((e) => {
  e.textContent = "Enlace Reescrito";
});

// getElementById Agarra el elemento por su id
const paragraph = document.getElementById("p1");
paragraph.textContent = "Cafes gooood";

//* Crear contenido HTML

// Generar un nuevo enlace
const nuevoEnlace = document.createElement("A");

// Agregar href
nuevoEnlace.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

// Agregar texto
nuevoEnlace.textContent = "Hola soy un nuevo enlace";

// Agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");

// Agregarlo al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//* Eventos
/* console.log(1);

 window.addEventListener('load', function () { // load espera a que el JS y los archivos que dependen del HTML esten listos
     console.log(2);
 })

 window.onload = function () {
     console.log(3);
 }

 document.addEventListener('DOMContentLoaded', function () { // Este solo espera por el HTML, no espera por el CSS ni las imagenes
     console.log(4);
 })

 console.log(5);

 window.onscroll = function (e) {
     console.log("escroling pa..");
     console.log(e);
 } */

// Seleccionar elementos y asociarles un evento
/* const btnEnviar = document.querySelector(".boton--primario")
 btnEnviar.addEventListener('click', function (evento) {
     console.log(evento); // Para que no se te recargue la pagina

     // Validar formulario


     console.log("enviando formulario");
 }) */

// Eventos de los inputs y textarea

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

// Evento del submit
const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validar el formulario

  const { nombre, email, mensaje } = datos;

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarAlerta("Todos los campos son obligatorios", true);
    return;
  }
  mostrarAlerta("Mensaje enviado con exito!", false);

  console.log("Enviando formulario");
});

// Si le pones "()" a las funciones te va a tirar error porque acordate que en JS las variables pueden ser funciones
nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

// Por más que no le pases un parametro, la funcion ya sabe que valor se guarda en el parametro
function leerTexto(e) {
  // datos.[aca iria "nombre", por ejemplo]
  datos[e.target.id] = e.target.value;
}

// Alerta
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P')
    alerta.textContent = mensaje;

    if( error ) {        
        alerta.classList.add("error")
    } else {
        alerta.classList.add("correcto")
    }

    formulario.appendChild(alerta)

    setTimeout(() => { alerta.remove(); }, 5000);
}
