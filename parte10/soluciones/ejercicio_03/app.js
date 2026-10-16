// ==========================================================================
// EJERCICIO 03 (Guiado): Paso por Referencia (Heap vs Stack) y Object.freeze()
// OBJETIVO: Demostrar que los objetos se pasan por referencia y cómo clonar o congelar.
// ==========================================================================

// 1. variables y constantes de estado
let original = { nombre: 'Ana', rol: 'Developer' };
let alias = original; // Asignación por referencia: ambas variables apuntan al mismo objeto en el Heap
let esCopiaIndependiente = false;
let estaCongelado = false;

// 2. constantes al DOM
const valorOriginalNombre = document.querySelector('#valorOriginalNombre');
const valorOriginalRol = document.querySelector('#valorOriginalRol');
const valorAliasNombre = document.querySelector('#valorAliasNombre');
const valorAliasRol = document.querySelector('#valorAliasRol');

const punteroAliasBadge = document.querySelector('#punteroAliasBadge');
const textoConector = document.querySelector('#textoConector');

const btnMutarAlias = document.querySelector('#btnMutarAlias');
const btnClonarSpread = document.querySelector('#btnClonarSpread');
const btnCongelar = document.querySelector('#btnCongelar');
const btnResetear = document.querySelector('#btnResetearMemoria');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function renderizarMemoria() {
    valorOriginalNombre.innerHTML = `Nombre: <strong>${original.nombre}</strong>`;
    valorOriginalRol.innerHTML = `Rol: <strong>${original.rol}</strong>`;

    valorAliasNombre.innerHTML = `Nombre: <strong>${alias.nombre}</strong>`;
    valorAliasRol.innerHTML = `Rol: <strong>${alias.rol}</strong>`;

    if (esCopiaIndependiente) {
        punteroAliasBadge.textContent = 'Dirección: #0x9B2C (Nuevo Heap)';
        punteroAliasBadge.style.backgroundColor = '#10b981';
        textoConector.textContent = '✂️ Memoria Independiente ✂️';
        textoConector.style.color = '#10b981';
    } else {
        punteroAliasBadge.textContent = 'Dirección: #0x4A1F (Heap Compartido)';
        punteroAliasBadge.style.backgroundColor = '#6366f1';
        textoConector.textContent = '➡️ Mismo Puntero ⬅️';
        textoConector.style.color = '#6366f1';
    }
}

function mutarAlias() {
    if (estaCongelado && !esCopiaIndependiente) {
        resultado.textContent = '🧊 ERROR: El objeto original está congelado con Object.freeze(). Las mutaciones son rechazadas.';
        resultado.className = 'resultado alerta-peligro';
        return;
    }

    alias.nombre = (alias.nombre === 'Carlos') ? 'Ana' : 'Carlos';
    renderizarMemoria();

    if (!esCopiaIndependiente) {
        resultado.textContent = `⚠️ ¡Efecto Referencia!: Hemos mutado alias.nombre = '${alias.nombre}', pero original.nombre también cambió porque comparten la misma dirección en el Heap.`;
        resultado.className = 'resultado alerta-peligro';
    } else {
        resultado.textContent = `✅ Copia independiente: alias.nombre ahora es '${alias.nombre}', pero el original sigue siendo '${original.nombre}'.`;
        resultado.className = 'resultado alerta-exito';
    }
}

function clonarConSpread() {
    // Romper la referencia creando un nuevo objeto con las mismas propiedades (Shallow Copy)
    alias = { ...original };
    esCopiaIndependiente = true;
    renderizarMemoria();

    resultado.textContent = '✨ Se ha clonado el objeto con { ...original }. Ahora ocupan distintas direcciones en el Heap.';
    resultado.className = 'resultado alerta-exito';
}

function congelarObjeto() {
    Object.freeze(original);
    estaCongelado = true;

    resultado.textContent = '🧊 Object.freeze(original) ejecutado. Las propiedades de original ahora son estrictamente inmutables.';
    resultado.className = 'resultado alerta-espera';
}

function restaurarEstado() {
    original = { nombre: 'Ana', rol: 'Developer' };
    alias = original;
    esCopiaIndependiente = false;
    estaCongelado = false;
    renderizarMemoria();

    resultado.textContent = '🔄 Estado de memoria restaurado. Variable B vuelve a ser un alias por referencia de A.';
    resultado.className = 'resultado';
}

// 4. funciones de eventos
function alPulsarMutar() {
    mutarAlias();
}

function alPulsarClonar() {
    clonarConSpread();
}

function alPulsarCongelar() {
    congelarObjeto();
}

function alPulsarResetear() {
    restaurarEstado();
}

// 5. escuchadores de eventos (addEventListener)
btnMutarAlias.addEventListener('click', alPulsarMutar);
btnClonarSpread.addEventListener('click', alPulsarClonar);
btnCongelar.addEventListener('click', alPulsarCongelar);
btnResetear.addEventListener('click', alPulsarResetear);

// Inicializar vista
renderizarMemoria();
