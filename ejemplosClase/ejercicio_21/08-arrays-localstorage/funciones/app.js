/* =========================================================
   TEORÍA · Funciones declaradas y anónimas
   ---------------------------------------------------------
   - function nombre(parámetros) { ... return valor; }
   - Se declara UNA vez y se llama todas las veces que haga falta
   - Las funciones declaradas se pueden llamar antes de la línea
     en la que están escritas (hoisting)
   - Al pasar una función a addEventListener se escribe SIN ()
   ========================================================= */

const salida = document.getElementById("salida");
const spanContador = document.getElementById("contador");
let contador = 0;

// 1. Llamamos a escribir() ANTES de declararla: funciona (hoisting)
escribir("La página se ha cargado. escribir() se llamó antes de declararse.");

// 2. Funciones declaradas
function escribir(mensaje) {
  // Reutilizable: cualquier parte del código puede escribir en la salida
  salida.textContent += mensaje + "\n";
}

function media(x, y) {
  return (x + y) / 2; // return devuelve el resultado a quien llama
}

function estado(nota) {
  if (nota >= 5) {
    return "aprobado";
  }
  return "suspenso";
}

function contar() {
  contador++;
  spanContador.textContent = contador;
  console.log("contar() se ha ejecutado. contador =", contador);
}

// 3. Usar funciones con parámetros y return
document.getElementById("btnCalcular").addEventListener("click", function () {
  // Esta función SIN nombre es una función anónima
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);

  const m = media(a, b);        // guardamos lo que devuelve
  const e = estado(m);          // y se lo pasamos a otra función

  escribir(`media(${a}, ${b}) → ${m}   ·   estado(${m}) → "${e}"`);
});

// 4. BIEN: le pasamos la función; el navegador la llamará en cada clic
document.getElementById("btnBien").addEventListener("click", contar);

// 5. MAL: contar() se ejecuta AHORA (una vez, al cargar) y lo que se
//    pasa es su resultado: undefined. El botón no hace nada.
document.getElementById("btnMal").addEventListener("click", contar());
