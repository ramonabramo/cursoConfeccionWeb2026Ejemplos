const coche = {
  marca: "Toyota",
  modelo: "Yaris",
  puertas: 5,
  extras: { aire: true }
};

console.log(coche.marca);            // notación de punto
console.log(coche["modelo"]);        // notación de corchetes
const clave = "puertas";
console.log(coche[clave]);           // clave guardada en una variable

console.log(coche.color);            // no existe: undefined
console.log("marca" in coche);       // ¿existe la clave?
console.log("color" in coche);
console.log(coche.garantia?.anios);  // ?. evita el error si falta garantia
