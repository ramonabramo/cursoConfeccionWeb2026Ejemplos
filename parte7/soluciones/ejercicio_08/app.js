/**
 * ENUNCIADO:
 * Ejercicio 08 (Solución): Bucle 'for...in' para renderizar datos de un Objeto.
 */

// 1. variables y constantes de estado
const perfilUsuario = {
    usuario: 'alex_frontend',
    rol: 'Desarrollador Web Senior',
    experienciaAnios: 4,
    especialidad: 'JavaScript / DOM',
    disponibleParaProyectos: 'Sí',
    ciudad: 'Valencia'
};

// 2. constantes al DOM
const btnGenerarFicha = document.querySelector('#btnGenerarFicha');
const btnContarProps = document.querySelector('#btnContarProps');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares

// 4. funciones de eventos
function generarFichaTabla() {
    let html = '<table class="tabla-objeto">';
    html += '<thead><tr><th>Propiedad</th><th>Valor</th></tr></thead><tbody>';

    for (const clave in perfilUsuario) {
        html += `<tr>
            <td><strong>${clave}</strong></td>
            <td>${perfilUsuario[clave]}</td>
        </tr>`;
    }

    html += '</tbody></table>';
    resultado.innerHTML = html;
}

function contarPropiedades() {
    let totalProps = 0;

    for (const clave in perfilUsuario) {
        totalProps++;
    }

    resultado.textContent = `El objeto analizado contiene exactamente ${totalProps} propiedades enumerables.`;
}

// 5. escuchadores de eventos
btnGenerarFicha.addEventListener('click', generarFichaTabla);
btnContarProps.addEventListener('click', contarPropiedades);
