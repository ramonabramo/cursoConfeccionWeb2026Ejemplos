// ==========================================================================
// EJERCICIO 05 (Guiado): Objetos JS vs JSON (JSON.stringify y JSON.parse)
// OBJETIVO: Comprender la serialización a texto plano JSON y el parseo con try/catch.
// ==========================================================================

// 1. variables y constantes de estado
// - Objeto JS con propiedades primitivas, un array y un método:
//     const empleado = {
//         id: 104,
//         nombre: 'Lucía Méndez',
//         habilidades: ['JS', 'React', 'Node'],
//         sueldo: 35000,
//         calcularBono() { return this.sueldo * 0.15; }
//     };

// 2. constantes al DOM
// - Textarea con el JSON: #textareaJson
// - Botones: #btnStringify, #btnParse, #btnProbarErrorJson
// - Div resultado: #resultado

// 3. funciones auxiliares
// - function serializarAJson():
//     * Utiliza JSON.stringify(empleado, null, 2) para crear texto legible con sangría.
//     * Pone el texto en #textareaJson.
//     * Explica que el método 'calcularBono' fue omitido porque JSON solo guarda datos puros.
// - function deserializarDesdeJson():
//     * Lee el texto del textarea.
//     * Utiliza un bloque try / catch:
//         - const obj = JSON.parse(textoJson);
//         - Notifica éxito y muestra propiedades recuperadas.
//         - Si hay error: atrapa con catch(err) y avisa de que el JSON es sintácticamente inválido.

// 4. funciones de eventos
// - Click en #btnStringify -> serializarAJson()
// - Click en #btnParse -> deserializarDesdeJson()

// 5. escuchadores de eventos (addEventListener)
