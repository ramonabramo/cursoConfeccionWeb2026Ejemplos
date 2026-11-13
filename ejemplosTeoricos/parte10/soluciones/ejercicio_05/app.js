// ==========================================================================
// EJERCICIO 05 (Guiado): Objetos JS vs JSON (JSON.stringify y JSON.parse)
// OBJETIVO: Comprender la serialización a texto plano JSON y el parseo con try/catch.
// ==========================================================================

// 1. variables y constantes de estado
const empleado = {
    id: 104,
    nombre: 'Lucía Méndez',
    habilidades: ['JS', 'React', 'Node'],
    sueldo: 35000,
    // Este método existirá en JS, pero desaparecerá al serializar a JSON
    calcularBono() {
        return this.sueldo * 0.15;
    }
};

// 2. constantes al DOM
const textareaJson = document.querySelector('#textareaJson');
const btnStringify = document.querySelector('#btnStringify');
const btnParse = document.querySelector('#btnParse');
const btnProbarError = document.querySelector('#btnProbarErrorJson');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function serializarAJson() {
    // JSON.stringify(valor, replacer, espaciosSangria)
    const textoJson = JSON.stringify(empleado, null, 2);
    textareaJson.value = textoJson;

    resultado.textContent = '📤 Objeto serializado con JSON.stringify(). Observa: el método "calcularBono" ha desaparecido porque JSON solo almacena datos planos.';
    resultado.className = 'resultado alerta-espera';
}

function deserializarDesdeJson() {
    const texto = textareaJson.value.trim();

    if (!texto) {
        resultado.textContent = '⚠️ El área de texto está vacía. Pulsa primero "Convertir a JSON".';
        resultado.className = 'resultado alerta-peligro';
        return;
    }

    try {
        // Parsear el string JSON a un objeto real de JS
        const objetoRecuperado = JSON.parse(texto);

        resultado.textContent = `✅ ¡Parseo exitoso con JSON.parse()!: Objeto recuperado -> ID: ${objetoRecuperado.id}, Nombre: "${objetoRecuperado.nombre}", Habilidades: [${objetoRecuperado.habilidades.join(', ')}].`;
        resultado.className = 'resultado alerta-exito';
    } catch (error) {
        resultado.textContent = `❌ SyntaxError al parsear JSON: "${error.message}". Recuerda que en JSON las claves y cadenas exigen comillas dobles obligatorias.`;
        resultado.className = 'resultado alerta-peligro';
    }
}

function inyectarErrorSintaxis() {
    // JSON defectuoso: claves sin comillas y comillas simples (ambos prohibidos en JSON)
    textareaJson.value = '{\n  id: 104,\n  \'nombre\': \'Error de sintaxis\'\n}';

    resultado.textContent = '⚠️ Se ha inyectado un JSON con errores de formato. Pulsa "Restaurar a Objeto (JSON.parse)" para ver cómo try/catch previene la caída del programa.';
    resultado.className = 'resultado alerta-peligro';
}

// 4. funciones de eventos
function alPulsarStringify() {
    serializarAJson();
}

function alPulsarParse() {
    deserializarDesdeJson();
}

function alPulsarInyectarError() {
    inyectarErrorSintaxis();
}

// 5. escuchadores de eventos (addEventListener)
btnStringify.addEventListener('click', alPulsarStringify);
btnParse.addEventListener('click', alPulsarParse);
btnProbarError.addEventListener('click', alPulsarInyectarError);
