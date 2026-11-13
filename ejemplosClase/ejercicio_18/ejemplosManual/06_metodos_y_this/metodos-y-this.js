const cuenta = {
  titular: "Lucía Navarro",
  saldo: 200,
  ingresar(cantidad) {
    this.saldo += cantidad;
    return `Ingreso de ${cantidad}€. Saldo actual: ${this.saldo}€`;
  },
  retirar(cantidad) {
    if (cantidad > this.saldo) {
      return "Operación denegada: saldo insuficiente.";
    }
    this.saldo -= cantidad;
    return `Retirada de ${cantidad}€. Saldo restante: ${this.saldo}€`;
  }
};

console.log(cuenta.ingresar(50));
console.log(cuenta.retirar(100));
console.log(cuenta.retirar(500));
