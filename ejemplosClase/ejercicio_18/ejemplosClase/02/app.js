/**
 * Crear un objeto llamado cuenta con dos propiedades: titular y saldo.
 * un metodo que se llame ingresar que me permita ingresar un saldo a la cuenta
 * un metodo que se llame retirar que me permita retirar un saldo a la cuenta
 * un metodo que se llame dibujar que me permita dibujar el titular y el saldo de la cuenta
 */

const cuenta = {
    titular: 'Ramon',
    saldo: 0,

    leer() {
        const inputCantidad = document.querySelector('#cantidad');
        const cantidad = Number(inputCantidad.value);
        return cantidad;
    },
    ingresar() {
        const cantidad = this.leer();
        this.saldo += cantidad;
        this.dibujar();
    },

    retirar() {
        const cantidad = this.leer();
        this.saldo -= cantidad;
        this.dibujar();
    },
    dibujar() {
        const liTitular = document.querySelector('#titular');
        const liSaldo = document.querySelector('#saldo');
        liTitular.innerHTML = this.titular;
        liSaldo.innerHTML = this.saldo;
    }
}

const botonIngresar = document.querySelector('#ingresar');
const botonRetirar = document.querySelector('#retirar');

botonIngresar.addEventListener('click', () => {
    cuenta.ingresar();
});

botonRetirar.addEventListener('click', () => {
    cuenta.retirar();
});