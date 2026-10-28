// ==========================================
// 1. FUNCIONES DE PROCESAMIENTO Y SALIDAS
// ==========================================


// ==========================================
// 2. VARIABLES GLOBALES
// ==========================================
// Nuestro array de 1 dimensión (el tren)
const trenMonstruoso = ["👾", "👻", "👽"];

// ==========================================
// 3. REFERENCIAS AL DOM
// ==========================================
const inputMonstruo = document.querySelector("#inputMonstruo");
const btnSubir = document.querySelector("#btnSubir");
const btnContar = document.querySelector("#btnContar");
const divResultado = document.querySelector("#resultado");


// ==========================================
// 4. EVENTOS (LISTENERS)
// ==========================================
btnSubir.addEventListener("click", function () {
    // A. Entradas
    const nuevoPasajero = inputMonstruo.value;

    // B. Procesamiento
    let mensajeSalida = "";

    if (nuevoPasajero !== "") {
        // Añadimos al final del array con push()
        trenMonstruoso.push(nuevoPasajero);

        // Preparamos la salida en una variable
        mensajeSalida = `El monstruo ${nuevoPasajero} ha subido al tren. Pasajeros actuales: ${trenMonstruoso.join(", ")}`;

        // Limpiamos el input para el siguiente pasajero
        inputMonstruo.value = "";
    } else {
        mensajeSalida = "¡No puedes subir aire al tren! Escribe un monstruo válido.";
    }

    // C. Salida
    divResultado.textContent = mensajeSalida;
});

btnContar.addEventListener("click", function () {
    // B. Procesamiento
    // Usamos .length para saber cuántos elementos hay en total
    const totalPasajeros = trenMonstruoso.length;
    const mensajeSalida = `Actualmente hay ${totalPasajeros} monstruos ocupando el tren. ¡Chu, chuuu!`;

    // C. Salida
    divResultado.textContent = mensajeSalida;
});