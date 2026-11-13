/**
 * ============================================================================
 * PORTAL PRINCIPAL: Ejercicio 19 - Objetos Literales en JavaScript
 * Profesor: Ramón Abramo (Santander, 2026)
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const buscadorInput = document.getElementById('buscadorInput');
  const filtroBotones = document.querySelectorAll('.filtro-btn');
  const secciones = document.querySelectorAll('.seccion-bloque');
  const tarjetas = document.querySelectorAll('.tarjeta');

  let filtroActivo = 'todos';
  let textoBusqueda = '';

  // Filtrado reactivo combinado
  function aplicarFiltros() {
    tarjetas.forEach(tarjeta => {
      const padreSeccion = tarjeta.closest('.seccion-bloque');
      const categoriaSeccion = padreSeccion ? padreSeccion.dataset.categoria : '';
      const tags = (tarjeta.dataset.tags || '').toLowerCase();
      const titulo = tarjeta.querySelector('h3') ? tarjeta.querySelector('h3').textContent.toLowerCase() : '';
      const descripcion = tarjeta.querySelector('p') ? tarjeta.querySelector('p').textContent.toLowerCase() : '';

      // Comprobar filtro por categoría
      const coincideCategoria = (filtroActivo === 'todos') || (categoriaSeccion === filtroActivo);

      // Comprobar filtro por texto de búsqueda
      const coincideTexto = !textoBusqueda || 
                            tags.includes(textoBusqueda) || 
                            titulo.includes(textoBusqueda) || 
                            descripcion.includes(textoBusqueda);

      if (coincideCategoria && coincideTexto) {
        tarjeta.style.display = 'flex';
      } else {
        tarjeta.style.display = 'none';
      }
    });

    // Ocultar secciones si no tienen ninguna tarjeta visible
    secciones.forEach(seccion => {
      const tarjetasVisibles = seccion.querySelectorAll('.tarjeta:not([style*="display: none"])');
      const coincideSeccionCategoria = (filtroActivo === 'todos') || (seccion.dataset.categoria === filtroActivo);
      
      if (tarjetasVisibles.length > 0 && coincideSeccionCategoria) {
        seccion.style.display = 'block';
      } else {
        seccion.style.display = 'none';
      }
    });
  }

  // Evento para el buscador
  if (buscadorInput) {
    buscadorInput.addEventListener('input', (e) => {
      textoBusqueda = e.target.value.trim().toLowerCase();
      aplicarFiltros();
    });
  }

  // Eventos para los botones de pestañas
  filtroBotones.forEach(btn => {
    btn.addEventListener('click', () => {
      filtroBotones.forEach(b => b.classList.remove('activo'));
      btn.classList.add('activo');
      filtroActivo = btn.dataset.filtro;
      aplicarFiltros();
    });
  });

  // Mensaje en consola pedagógico
  console.log(
    '%c📦 EJERCICIO 19: OBJETOS EN NOTACIÓN LITERAL EN JAVASCRIPT',
    'color: #38bdf8; font-size: 16px; font-weight: bold; background: #0f172a; padding: 6px 12px; border-radius: 4px;'
  );
  console.log(
    '%cProfesor: Ramón Abramo · Santander (Cantabria) 2026\nIncluye 12 ejemplos didácticos del manual y 5 prácticas guiadas con solución oficial.',
    'color: #94a3b8; font-size: 12px;'
  );
});
