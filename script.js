var columnasEnFila = false;
var tituloCambiado = false;
var colorCambiado = false;
var imagenAgregada = false;

function ordenarColumnas() {
    var contenido = document.getElementById("contenido-libro");
    
    if (columnasEnFila == false) {
        contenido.className = "contenido-filas";
        columnasEnFila = true;
    } else {
        contenido.className = "contenido-columnas";
        columnasEnFila = false;
    }
}

function cambiarTitulo() {
    var titulo = document.getElementById("titulo-principal");
    
    if (tituloCambiado == false) {
        titulo.innerHTML = "JavaScript: Curso prático avanzado";
        tituloCambiado = true;
    } else {
        titulo.innerHTML = "HTML & CSS: Curso práctico avanzado";
        tituloCambiado = false;
    }
}

function cambiarColorSubtitulo() {
    var subtitulo = document.getElementById("subtitulo-descripcion");
    var texto = document.getElementById("texto-descripcion");
    
    if (colorCambiado == false) {
        subtitulo.style.color = "#e74c3c";
        texto.style.fontFamily = "Times New Roman, serif";
        colorCambiado = true;
    } else {
        subtitulo.style.color = "#4a90e2";
        texto.style.fontFamily = "Arial, sans-serif";
        colorCambiado = false;
    }
}

function agregarImagen() {
    var contenedor = document.getElementById("contenedor-imagen-nueva");
    
    if (imagenAgregada == false) {
        var nuevaImagen = document.createElement("img");
        nuevaImagen.src = "imagen.JPG"; 
        nuevaImagen.alt = "Portada de It";
        contenedor.appendChild(nuevaImagen);
        imagenAgregada = true;
    } else {
        contenedor.innerHTML = "";
        imagenAgregada = false;
    }
}
