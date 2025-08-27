// Array de películas de Studio Ghibli
const peliculasGhibli = [
{
    titulo: "El Viaje de Chihiro",
    personaje: "Chihiro y Haku",
    imagen: 'imgsincara.jpg'
},
{
    titulo: "Mi Vecino Totoro",
    personaje: "Totoro y Mei",
    imagen:"imgtotoro.jpg"
},
{
    titulo: "La Princesa Mononoke",
    personaje: "San y Ashitaka",
    imagen: "imgponyo.jpg"
},
{
    titulo: "El Castillo Ambulante",
    personaje: "Howl y Sophie",
    imagen: "imgkiki.jpg"
}
];

let indiceActual = 0;

// Selecciona los elementos HTML
const tituloElemento = document.getElementById("titulo-pelicula");
const personajeElemento = document.getElementById("personaje-nombre");
const imagenElemento = document.getElementById("imagen-ghibli");
const botonAnterior = document.getElementById("boton-anterior");
const botonSiguiente = document.getElementById("boton-siguiente");

// Función para mostrar la información de la película
function mostrarPelicula() {
const peliculaSeleccionada = peliculasGhibli[indiceActual];

tituloElemento.textContent = peliculaSeleccionada.titulo;
personajeElemento.textContent = peliculaSeleccionada.personaje;
imagenElemento.src = peliculaSeleccionada.imagen;
}

// Lógica para el botón 'Siguiente'
botonSiguiente.addEventListener("click", () => {
indiceActual = (indiceActual + 1) % peliculasGhibli.length;
mostrarPelicula();
});

// Lógica para el botón 'Anterior'
botonAnterior.addEventListener("click", () => {
indiceActual = (indiceActual - 1 + peliculasGhibli.length) % peliculasGhibli.length;
mostrarPelicula();
});

// Muestra la primera película al cargar la página por primera vez
mostrarPelicula();