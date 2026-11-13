// ==========================================================================
// EJERCICIO 06 (Práctica): Gestor de Notas con Serialización JSON
// OBJETIVO: Guardar notas en array de objetos, exportar con JSON.stringify e importar con JSON.parse.
// ==========================================================================

// 1. variables y constantes de estado
let notas = [
    { id: 1, texto: 'Comprender Heap vs Stack', prioridad: 'Alta' },
    { id: 2, texto: 'Practicar campos privados # en clases', prioridad: 'Media' }
];

// 2. constantes al DOM
const inputNotaTexto = document.querySelector('#inputNotaTexto');
const selectPrioridad = document.querySelector('#selectPrioridad');
const btnAgregarNota = document.querySelector('#btnAgregarNota');
const btnExportarJson = document.querySelector('#btnExportarJson');
const btnImportarJson = document.querySelector('#btnImportarJson');

const listaNotasContenedor = document.querySelector('#listaNotasContenedor');
const textareaNotasJson = document.querySelector('#textareaNotasJson');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function renderizarNotas() {
    listaNotasContenedor.innerHTML = '';

    if (notas.length === 0) {
        listaNotasContenedor.innerHTML = '<p class="texto-secundario">No hay notas registradas.</p>';
        return;
    }

    notas.forEach((nota) => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-nota-item';
        tarjeta.innerHTML = `
            <div>
                <strong>${nota.texto}</strong>
                <span class="badge-prioridad badge-prioridad-${nota.prioridad.toLowerCase()}">${nota.prioridad}</span>
            </div>
        `;
        listaNotasContenedor.appendChild(tarjeta);
    });
}

function agregarNota() {
    const texto = inputNotaTexto.value.trim();

    if (!texto) {
        resultado.textContent = '⚠️ Escribe una descripción para la nota.';
        resultado.className = 'resultado alerta-peligro';
        return;
    }

    const nuevaNota = {
        id: Date.now(),
        texto: texto,
        prioridad: selectPrioridad.value
    };

    notas.push(nuevaNota);
    inputNotaTexto.value = '';
    renderizarNotas();

    resultado.textContent = `✅ Nota agregada con éxito. Total: ${notas.length} notas.`;
    resultado.className = 'resultado alerta-exito';
}

function exportarNotas() {
    const textoJson = JSON.stringify(notas, null, 2);
    textareaNotasJson.value = textoJson;

    resultado.textContent = `📤 Exportadas ${notas.length} notas al buffer JSON con JSON.stringify().`;
    resultado.className = 'resultado alerta-exito';
}

function importarNotas() {
    const texto = textareaNotasJson.value.trim();

    if (!texto) {
        resultado.textContent = '⚠️ El buffer JSON está vacío. Pega una cadena JSON válida primero.';
        resultado.className = 'resultado alerta-peligro';
        return;
    }

    try {
        const datos = JSON.parse(texto);

        if (!Array.isArray(datos)) {
            throw new Error('El JSON debe contener un Array [...] de notas.');
        }

        notas = datos;
        renderizarNotas();

        resultado.textContent = `📥 Se han importado correctamente ${notas.length} notas desde JSON.`;
        resultado.className = 'resultado alerta-exito';
    } catch (err) {
        resultado.textContent = `❌ Error al importar JSON: ${err.message}`;
        resultado.className = 'resultado alerta-peligro';
    }
}

// 4. funciones de eventos
function alPulsarAgregar() {
    agregarNota();
}

function alPulsarExportar() {
    exportarNotas();
}

function alPulsarImportar() {
    importarNotas();
}

// 5. escuchadores de eventos (addEventListener)
btnAgregarNota.addEventListener('click', alPulsarAgregar);
btnExportarJson.addEventListener('click', alPulsarExportar);
btnImportarJson.addEventListener('click', alPulsarImportar);

// Inicializar lista
renderizarNotas();
