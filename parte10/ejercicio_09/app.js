// ==========================================================================
// EJERCICIO 09 (Guiado): Campos Privados (#) y Getters / Setters
// OBJETIVO: Implementar campo privado #saldo, getter de lectura y métodos controlados.
// ==========================================================================

// 1. variables y constantes de estado
// - Definir clase CuentaBancaria con:
//     * #saldo (privado)
//     * #pin (privado)
//     * constructor(titular, saldoInicial, pin)
//     * get saldo(): devuelve #saldo
//     * ingresar(cantidad)
//     * retirar(cantidad, pinIntroducido)
// - Instancia: const cuenta = new CuentaBancaria('Laura Morales', 1500, '1234');

// 2. constantes al DOM
// - Displays: #titularCuenta, #saldoCuentaVisual
// - Inputs: #inputCantidadOperacion, #inputPinOperacion
// - Botones: #btnIngresar, #btnRetirar, #btnHackearPrivado
// - Div resultado: #resultado

// 3. funciones auxiliares
// - function actualizarDisplaySaldo():
//     * Lee cuenta.saldo (a través del getter) y lo pinta en #saldoCuentaVisual.
// - function realizarIngreso():
//     * Valida cantidad y llama a cuenta.ingresar(cantidad)
// - function realizarRetirada():
//     * Valida pin y saldo, y llama a cuenta.retirar(...)
// - function probarAccesoIlegal():
//     * Explica que intentar acceder a cuenta.#saldo lanza un error irrecuperable de sintaxis.

// 4. funciones de eventos
// - Click en #btnIngresar -> realizarIngreso()
// - Click en #btnRetirar -> realizarRetirada()
// - Click en #btnHackearPrivado -> probarAccesoIlegal()

// 5. escuchadores de eventos (addEventListener)
