/* ==============================================================================
   EJERCICIO 19: Catálogo de Componentes Tecnológicos 💻
   
   OBJETIVO:
   Construir dinámicamente un catálogo de 10 productos tecnológicos en pantalla al
   hacer clic en el botón "Cargar Catálogo", aprendiendo a combinar:
   1. Cuatro arrays paralelos que contienen la información de los productos:
      - 'imagenes': nombres de los archivos dentro de la carpeta 'imgs/'.
      - 'titulos': nombres comerciales de cada producto.
      - 'textos': marcas o fabricantes de cada producto.
      - 'precios': valores numéricos de los productos.
   2. Una función declarada 'crearTarjeta()' que recibe como parámetros la información 
      de un producto y devuelve su estructura HTML utilizando Template Literals (con backticks `...`).
   3. El método 'forEach()' para recorrer los productos y utilizar el segundo parámetro 
      (el índice numérico 'i') para sincronizar y extraer los datos correspondientes de 
      los 4 arrays a la vez.
   4. La inyección masiva de las tarjetas generadas dentro del contenedor '#gridProductos' 
      mediante la propiedad '.innerHTML'.

   ------------------------------------------------------------------------------
   CONCEPTOS CLAVE:
   ------------------------------------------------------------------------------
   • Arrays paralelos:
     Son listas distintas que tienen el mismo número de elementos (10 en este caso),
     donde la posición 'i' de cada una corresponde al mismo producto. Por ejemplo, en i = 0:
     - imagenes[0] -> "antivirus.jpg"
     - titulos[0]  -> "Antivirus Kaspersky Standard"
     - textos[0]   -> "KASPERSKY"
     - precios[0]  -> 27.90

   • forEach con índice:
     titulos.forEach((tituloActual, i) => {
         // 'tituloActual' es el elemento de la vuelta.
         // 'i' es la posición (0, 1, 2...). Nos permite sacar:
         // const imagenActual = imagenes[i];
         // const marcaActual  = textos[i];
         // const precioActual = precios[i];
     });

   • Template Literals (Plantillas de cadena):
     Permiten escribir HTML en varias líneas usando comillas invertidas (`) e intercalar
     variables con la sintaxis ${variable}.
   
   ------------------------------------------------------------------------------
   PASOS A REALIZAR:
   ------------------------------------------------------------------------------
   - PASO 1: Declarar la función 'crearTarjeta(imagen, titulo, marca, precio)' que devuelva 
             la estructura HTML del artículo:
             <article class="tarjeta">
                 <img src="imgs/${imagen}" alt="${titulo}">
                 <p class="marca">${marca}</p>
                 <h3 class="titulo">${titulo}</h3>
                 <p class="precio">${precio.toFixed(2)} €</p>
             </article>
   - PASO 2: Disponer de los 4 arrays globales: imagenes, titulos, textos y precios.
   - PASO 3: Crear las constantes al DOM que apunten al botón '#btnCargar' y al contenedor '#gridProductos'.
   - PASO 4: Añadir el escuchador de eventos 'click' al botón '#btnCargar'.
   - PASO 5: Dentro de la función del evento:
             a) Declarar una variable local acumuladora de texto vacía (let catalogoHTML = "").
             b) Recorrer el array 'titulos' con el método '.forEach((tituloActual, i) => { ... })'.
             c) Usar el índice 'i' para obtener la imagenActual, marcaActual y precioActual.
             d) Llamar a 'crearTarjeta(imagenActual, tituloActual, marcaActual, precioActual)'
                y sumar (+=) el resultado a la variable 'catalogoHTML'.
             e) Asignar todo el HTML acumulado al contenedor: gridProductos.innerHTML = catalogoHTML.
   ============================================================================== */

// ==========================================
// 1. FUNCIONES DECLARADAS
// ==========================================
// TODO: Declara la función crearTarjeta(imagen, titulo, marca, precio)
// Debe devolver con 'return' el string con la estructura HTML de <article class="tarjeta">...




// ==========================================
// 2. VARIABLES Y CONSTANTES GLOBALES (ARRAYS)
// ==========================================
const imagenes = [
    "antivirus.jpg", "router.jpg", "pantalla-portatil.jpg",
    "docking.jpg", "raton.jpg", "teclado.jpg",
    "auriculares.jpg", "webcam.jpg", "ssd.jpg", "monitor-dahua.jpg"
];

const titulos = [
    "Antivirus Kaspersky Standard", "Punto de Acceso Deco X10",
    "Monitor Portátil Arzopa", "Docking USB-C NGS",
    "Ratón Gaming RGB", "Teclado Mecánico Pro",
    "Auriculares Inalámbricos", "Cámara Web 1080p",
    "Disco Duro SSD 1TB", "Monitor Dahua 27\" Curvo"
];

const textos = [
    "KASPERSKY", "TP-LINK", "ARZOPA", "NGS",
    "LOGITECH", "CORSAIR", "RAZER", "CREATIVE",
    "SAMSUNG", "DAHUA"
];

const precios = [
    27.90, 199.90, 129.91, 85.99,
    45.50, 110.00, 79.99, 35.00,
    99.95, 89.90
];


// ==========================================
// 3. CONSTANTES AL DOM
// ==========================================
// TODO: Captura el botón #btnCargar y el contenedor #gridProductos con document.querySelector




// ==========================================
// 4. EVENTOS Y ESCUCHADORES
// ==========================================
// TODO: Añade el escuchador 'click' a btnCargar
// Dentro del evento:
//   1. Crea una variable let catalogoHTML = "";
//   2. Recorre titulos con forEach((tituloActual, i) => { ... })
//   3. Obtén imagenActual, marcaActual y precioActual usando el índice i
//   4. Llama a crearTarjeta(...) y acumula en catalogoHTML con +=
//   5. Asigna el resultado a gridProductos.innerHTML
