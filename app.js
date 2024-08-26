
const entradaTexto = document.getElementById("entradaTexto"); // Campo de entrada de texto
const resultado = document.getElementById("resultado"); // Campo de resultado

// Función para encriptar el texto
function encriptar() {
    const texto = entradaTexto.value; // Obtener el texto ingresado por el usuario
    
    console.log("Se ingresó el siguiente texto: ", texto); // Para depuración: muestra el texto ingresado en la consola

    // Validación: Verificar si el campo de texto está vacío
    if (!texto.trim()) {
        alert("El campo de texto está vacío. Por favor, ingrese un texto.");
        return;
    }

    // Validación: Verificar si el texto contiene mayúsculas o tildes
    const mayusculasTildes = /[A-ZÁÉÍÓÚáéíóú]/;
    if (mayusculasTildes.test(texto)) {
        alert("No se permiten mayúsculas y/o tildes");
        return;
    }

    // Encriptación del texto ingresado
    const encriptacion = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    // Mostrar el texto encriptado en el área de resultado
    resultado.value = encriptacion;

    // Ocultar el placeholder y mostrar el resultado y botón de copiar
    document.getElementById("placeholder").style.display = "none";
    resultado.style.display = "block";
    document.getElementById("btnCopiar").style.display = "block";
}

// Función para desencriptar el texto
function desencriptar() {
    const textoEncriptado = entradaTexto.value; // Obtener el texto encriptado ingresado por el usuario
    
    console.log("Se ingresó el siguiente texto: ", textoEncriptado); // Para depuración: muestra el texto encriptado en la consola

    // Desencriptación del texto ingresado
    const desencriptacion = textoEncriptado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    // Mostrar el texto desencriptado en el área de resultado
    resultado.value = desencriptacion;

    // Ocultar el placeholder y mostrar el resultado y botón de copiar
    document.getElementById("placeholder").style.display = "none";
    resultado.style.display = "block";
    document.getElementById("btnCopiar").style.display = "block";
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function copiar() {
    resultado.select(); // Seleccionar el texto en el área de resultado
    document.execCommand("copy"); // Copiar el texto seleccionado al portapapeles
    alert("Texto copiado al portapapeles"); // Notificar al usuario que el texto ha sido copiado
}

// Evento para detectar cuando el campo de entrada está vacío
entradaTexto.addEventListener("input", function () {
    if (entradaTexto.value.trim() === "") {
        // Si el campo está vacío, mostrar el placeholder y ocultar el resultado y el botón de copiar
        placeholder.style.display = "flex";
        resultado.style.display = "none";
        btnCopiar.style.display = "none";
    }
});