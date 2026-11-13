const alumno = { nombre: "Ana", edad: 22 };

// Guardar: localStorage solo admite texto
localStorage.setItem("alumno", JSON.stringify(alumno));

// Recuperar: texto -> objeto
const recuperado = JSON.parse(localStorage.getItem("alumno"));
console.log(recuperado.nombre);
