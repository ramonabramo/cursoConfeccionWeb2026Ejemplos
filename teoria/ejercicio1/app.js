const parrafo1 = document.querySelector("#parrafo1");
const parrafo2 = document.querySelector("#parrafo2");
const parrafo3 = document.querySelector("#parrafo3");
const salida = document.querySelector("#salida");

parrafo1.addEventListener("click", function () {
    salida.innerHTML = "🐶";
});

parrafo2.addEventListener("click", function () {
    salida.innerHTML = "🐱";
});

parrafo3.addEventListener("click", function () {
    salida.innerHTML = "🐭";
});