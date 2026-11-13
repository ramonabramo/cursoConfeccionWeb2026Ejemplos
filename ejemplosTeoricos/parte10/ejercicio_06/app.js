// ==========================================================================
// EJERCICIO 06 (Práctica): Gestor de Notas con Serialización JSON
// OBJETIVO: Guardar notas en array de objetos, exportar con JSON.stringify e importar con JSON.parse.
// ==========================================================================

// 1. variables y constantes de estado
// - Array de objetos notas: let notas = [ { id: 1, texto: 'Comprender Heap vs Stack', prioridad: 'Alta' } ];

// 2. constantes al DOM
// - Inputs: #inputNotaTexto, #selectPrioridad
// - Botones: #btnAgregarNota, #btnExportarJson, #btnImportarJson
// - Contenedor visual: #listaNotasContenedor
// - Textarea JSON: #textareaNotasJson
// - Div resultado: #resultado

// 3. funciones auxiliares
// - function renderizarNotas():
//     * Limpia #listaNotasContenedor.
//     * Itera con forEach y genera una tarjeta HTML por cada nota con su texto y prioridad.
// - function agregarNota():
//     * Crea un objeto literal { id: Date.now(), texto: ..., prioridad: ... }
//     * notas.push(nuevaNota)
//     * renderizarNotas()
// - function exportarNotasAJson():
//     * const textoJson = JSON.stringify(notas, null, 2);
//     * Lo coloca en el textarea.
// - function importarNotasDesdeJson():
//     * Lee textarea.
//     * Usa try / catch para hacer JSON.parse(texto).
//     * Valida que sea un Array con Array.isArray(datos).
//     * notas = datos;
//     * renderizarNotas();

// 4. funciones de eventos
// - Click en #btnAgregarNota -> agregarNota()
// - Click en #btnExportarJson -> exportarNotasAJson()
// - Click en #btnImportarJson -> importarNotasDesdeJson()

// 5. escuchadores de eventos (addEventListener)
