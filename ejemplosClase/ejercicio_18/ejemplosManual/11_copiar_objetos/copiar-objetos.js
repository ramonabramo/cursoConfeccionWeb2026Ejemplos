const a = { nombre: "Ana", notas: [7, 8] };

const b = a;                           // NO es una copia: apunta al mismo objeto
b.nombre = "Berta";
console.log(a.nombre);
console.log(a === b);

const c = { ...a };                    // copia superficial
c.nombre = "Carla";
c.notas.push(10);                      // el array interno se comparte
console.log(a.nombre, a.notas);

const d = structuredClone(a);          // copia profunda
d.notas.push(5);
console.log(a.notas, d.notas);

console.log({} === {});                // dos objetos distintos nunca son iguales
