// A) Convención: el guion bajo avisa, pero no protege
const usuario = {
  nombre: "Marta",
  _claveSecreta: "1234",
  saludar() { return `Hola, soy ${this.nombre}`; }
};
console.log(usuario._claveSecreta);

// B) Privacidad real con una clausura (función autoejecutable)
const cajaFuerte = (function () {
  const pinSecreto = "9876";
  let dinero = 1000;

  function registrar(texto) {
    console.log("[Auditoría] " + texto);
  }

  return {
    consultarSaldo(pin) {
      if (pin !== pinSecreto) return "PIN incorrecto";
      registrar("Consulta de saldo autorizada");
      return dinero + "€";
    }
  };
})();

console.log(cajaFuerte.dinero);
console.log(cajaFuerte.consultarSaldo("0000"));
console.log(cajaFuerte.consultarSaldo("9876"));
