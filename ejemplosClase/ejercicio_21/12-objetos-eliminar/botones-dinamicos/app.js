/* =========================================================
   TEORÍA · Botones creados dinámicamente
   ---------------------------------------------------------
   - Al crear cada <li> con createElement, creamos también
     sus botones y les asociamos un addEventListener
   - La función del evento "recuerda" las variables de cuando
     se creó (eso se llama clausura o closure)
   - Con let en el for, cada vuelta tiene su propio i
   - Después de borrar, se repinta TODO: los índices cambian
   ========================================================= */

const frutas = ["Manzana", "Pera", "Kiwi", "Uva"];

const lista = document.getElementById("lista");
const salida = document.getElementById("salida");
const zonaBotones = document.getElementById("zonaBotones");

// 1. Pinta la lista con un botón por fila
function pintarLista() {
  lista.replaceChildren();

  for (let i = 0; i < frutas.length; i++) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = frutas[i];

    const btnQuien = document.createElement("button");
    btnQuien.type = "button";
    btnQuien.className = "secundario pequeno";
    btnQuien.textContent = "¿Quién soy?";
    btnQuien.addEventListener("click", function () {
      // Esta función recuerda el i de SU vuelta del bucle
      salida.textContent = `Soy el botón de la posición ${i}: ${frutas[i]}`;
    });

    const btnEliminar = document.createElement("button");
    btnEliminar.type = "button";
    btnEliminar.className = "peligro pequeno";
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", function () {
      const quitado = frutas.splice(i, 1);
      salida.textContent =
        `frutas.splice(${i}, 1) → he quitado "${quitado[0]}"\n` +
        `Repinto la lista para que cada botón tenga su índice NUEVO.`;
      pintarLista();
    });

    li.append(span, btnQuien, btnEliminar);
    lista.appendChild(li);
  }

  if (frutas.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No quedan frutas. Recarga la página para empezar de nuevo.";
    lista.appendChild(li);
  }
}

pintarLista();

// 2. Con var: todas las funciones comparten la MISMA variable i
document.getElementById("btnVar").addEventListener("click", function () {
  zonaBotones.replaceChildren();

  for (var i = 0; i < 3; i++) {
    const boton = document.createElement("button");
    boton.textContent = `Botón ${i}`;
    boton.addEventListener("click", function () {
      salida.textContent = `(var) Hiciste clic y la función dice: i = ${i}\n¡Todos dicen 3! Cuando haces clic, el bucle ya terminó.`;
    });
    zonaBotones.appendChild(boton);
  }
});

// 3. Con let: cada vuelta crea un i nuevo
document.getElementById("btnLet").addEventListener("click", function () {
  zonaBotones.replaceChildren();

  for (let i = 0; i < 3; i++) {
    const boton = document.createElement("button");
    boton.textContent = `Botón ${i}`;
    boton.addEventListener("click", function () {
      salida.textContent = `(let) Hiciste clic y la función dice: i = ${i}\nCada botón recuerda su propio valor.`;
    });
    zonaBotones.appendChild(boton);
  }
});
