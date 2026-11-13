const circulo = {
  radio: 5,
  get diametro() {
    return this.radio * 2;
  },
  set diametro(valor) {
    this.radio = valor / 2;
  }
};

console.log(circulo.diametro); // se lee como una propiedad
circulo.diametro = 40;         // se asigna como una propiedad
console.log(circulo.radio);
