// Contenido para cada sección
const previewContent = {
    collapseOne: `
        <svg class="preview-image" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <!-- Login Screen -->
            <rect x="150" y="80" width="300" height="240" rx="15" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
            
            <!-- Logo -->
            <rect x="270" y="100" width="60" height="60" rx="10" fill="#F71963"/>
            <text x="300" y="140" font-family="Arial" font-size="30" fill="#ffffff" text-anchor="middle" font-weight="bold">V</text>
            
            <!-- Title -->
            <text x="300" y="185" font-family="Arial" font-size="18" fill="#142032" text-anchor="middle" font-weight="bold">VTEX Admin</text>
            
            <!-- Email field -->
            <rect x="180" y="200" width="240" height="35" rx="5" fill="#f8f9fa" stroke="#e0e0e0" stroke-width="1"/>
            <text x="190" y="223" font-family="Arial" font-size="12" fill="#727273">📧 Email</text>
            
            <!-- Password field -->
            <rect x="180" y="245" width="240" height="35" rx="5" fill="#f8f9fa" stroke="#e0e0e0" stroke-width="1"/>
            <text x="190" y="268" font-family="Arial" font-size="12" fill="#727273">🔒 Contraseña</text>
            
            <!-- Login button -->
            <rect x="180" y="290" width="240" height="40" rx="8" fill="#F71963"/>
            <text x="300" y="315" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="bold">Iniciar Sesión</text>
        </svg>
    `,
    collapseTwo: `
        <svg class="preview-image" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <!-- Dashboard completo -->
            <rect x="50" y="40" width="500" height="320" rx="10" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
            
            <!-- Header -->
            <rect x="50" y="40" width="500" height="50" rx="10" fill="#142032"/>
            <text x="80" y="70" font-family="Arial" font-size="18" fill="#ffffff" font-weight="bold">VTEX Admin</text>
            <rect x="450" y="55" width="80" height="25" rx="5" fill="#F71963"/>
            <text x="490" y="73" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">Mi cuenta</text>
            
            <!-- Sidebar -->
            <rect x="50" y="90" width="120" height="270" fill="#f8f9fa"/>
            
            <rect x="60" y="105" width="100" height="28" rx="5" fill="#F71963"/>
            <text x="110" y="123" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle" font-weight="bold">🏠 Inicio</text>
            
            <rect x="60" y="140" width="100" height="28" rx="5" fill="transparent"/>
            <text x="110" y="158" font-family="Arial" font-size="11" fill="#727273" text-anchor="middle">📦 Pedidos</text>
            
            <rect x="60" y="175" width="100" height="28" rx="5" fill="transparent"/>
            <text x="110" y="193" font-family="Arial" font-size="11" fill="#727273" text-anchor="middle">📊 Productos</text>
            
            <rect x="60" y="210" width="100" height="28" rx="5" fill="transparent"/>
            <text x="110" y="228" font-family="Arial" font-size="11" fill="#727273" text-anchor="middle">💰 Precios</text>
            
            <rect x="60" y="245" width="100" height="28" rx="5" fill="transparent"/>
            <text x="110" y="263" font-family="Arial" font-size="11" fill="#727273" text-anchor="middle">🎁 Promos</text>
            
            <rect x="60" y="280" width="100" height="28" rx="5" fill="transparent"/>
            <text x="110" y="298" font-family="Arial" font-size="11" fill="#727273" text-anchor="middle">⚙️ Config</text>
            
            <!-- Main content area -->
            <rect x="180" y="100" width="360" height="250" fill="#ffffff"/>
            
            <!-- Stats cards -->
            <rect x="190" y="110" width="160" height="70" rx="8" fill="#fff5f8" stroke="#F71963" stroke-width="2"/>
            <text x="270" y="135" font-family="Arial" font-size="11" fill="#727273" text-anchor="middle">Ventas del día</text>
            <text x="270" y="160" font-family="Arial" font-size="20" fill="#F71963" text-anchor="middle" font-weight="bold">$8,240</text>
            
            <rect x="370" y="110" width="160" height="70" rx="8" fill="#f0f8ff" stroke="#142032" stroke-width="2"/>
            <text x="450" y="135" font-family="Arial" font-size="11" fill="#727273" text-anchor="middle">Pedidos nuevos</text>
            <text x="450" y="160" font-family="Arial" font-size="20" fill="#142032" text-anchor="middle" font-weight="bold">42</text>
            
            <!-- Recent orders table -->
            <text x="190" y="210" font-family="Arial" font-size="13" fill="#142032" font-weight="bold">Pedidos recientes</text>
            <rect x="190" y="220" width="340" height="120" rx="5" fill="#f8f9fa"/>
            
            <rect x="200" y="230" width="320" height="25" fill="#ffffff"/>
            <text x="210" y="248" font-family="Arial" font-size="10" fill="#727273">#12345 - Juan Pérez</text>
            <text x="480" y="248" font-family="Arial" font-size="10" fill="#28a745" text-anchor="end">$120</text>
            
            <rect x="200" y="260" width="320" height="25" fill="#ffffff"/>
            <text x="210" y="278" font-family="Arial" font-size="10" fill="#727273">#12344 - María López</text>
            <text x="480" y="278" font-family="Arial" font-size="10" fill="#28a745" text-anchor="end">$85</text>
            
            <rect x="200" y="290" width="320" height="25" fill="#ffffff"/>
            <text x="210" y="308" font-family="Arial" font-size="10" fill="#727273">#12343 - Carlos Ruiz</text>
            <text x="480" y="308" font-family="Arial" font-size="10" fill="#28a745" text-anchor="end">$210</text>
        </svg>
    `,
    collapseThree: `
        <svg class="preview-image" viewBox="0 0 600 450" xmlns="http://www.w3.org/2000/svg">
            <!-- Product form completo -->
            <rect x="50" y="30" width="500" height="390" rx="10" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
            
            <text x="300" y="60" font-family="Arial" font-size="18" fill="#142032" text-anchor="middle" font-weight="bold">Crear Producto Completo</text>
            
            <!-- Nombre -->
            <text x="70" y="90" font-family="Arial" font-size="11" fill="#727273">Nombre del producto</text>
            <rect x="70" y="95" width="460" height="25" rx="5" fill="#f8f9fa" stroke="#e0e0e0"/>
            <text x="80" y="112" font-family="Arial" font-size="10" fill="#999">Zapatillas Running Pro</text>
            
            <!-- Marca y Categoría -->
            <text x="70" y="135" font-family="Arial" font-size="11" fill="#727273">Marca</text>
            <rect x="70" y="140" width="220" height="25" rx="5" fill="#fff5f8" stroke="#F71963"/>
            <text x="80" y="157" font-family="Arial" font-size="10" fill="#F71963" font-weight="bold">Nike</text>
            <text x="260" y="157" font-family="Arial" font-size="9" fill="#F71963">+ Crear</text>
            
            <text x="310" y="135" font-family="Arial" font-size="11" fill="#727273">Categoría</text>
            <rect x="310" y="140" width="220" height="25" rx="5" fill="#f0f8ff" stroke="#142032"/>
            <text x="320" y="157" font-family="Arial" font-size="10" fill="#142032" font-weight="bold">Deportes > Calzado > Running</text>
            
            <!-- Descripción -->
            <text x="70" y="180" font-family="Arial" font-size="11" fill="#727273">Descripción</text>
            <rect x="70" y="185" width="460" height="50" rx="5" fill="#f8f9fa" stroke="#e0e0e0"/>
            <text x="80" y="202" font-family="Arial" font-size="9" fill="#999">Zapatillas profesionales para running...</text>
            
            <!-- Productos similares -->
            <rect x="70" y="250" width="460" height="60" rx="5" fill="#e8f5e9" stroke="#28a745" stroke-width="2"/>
            <text x="300" y="270" font-family="Arial" font-size="11" fill="#142032" text-anchor="middle" font-weight="bold">🔗 Productos Similares</text>
            <rect x="100" y="280" width="80" height="20" rx="3" fill="#ffffff"/>
            <text x="140" y="294" font-family="Arial" font-size="8" fill="#727273" text-anchor="middle">Trail Pro</text>
            <rect x="190" y="280" width="80" height="20" rx="3" fill="#ffffff"/>
            <text x="230" y="294" font-family="Arial" font-size="8" fill="#727273" text-anchor="middle">Training X</text>
            <rect x="280" y="280" width="100" height="20" rx="3" fill="#28a745"/>
            <text x="330" y="294" font-family="Arial" font-size="8" fill="#ffffff" text-anchor="middle">+ Agregar similar</text>
            
            <!-- Imágenes -->
            <text x="70" y="330" font-family="Arial" font-size="11" fill="#727273">Imágenes del producto</text>
            <rect x="70" y="335" width="60" height="60" rx="5" fill="#fff5f8" stroke="#F71963" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="100" y="370" font-family="Arial" font-size="20" fill="#F71963" text-anchor="middle">+</text>
            
            <rect x="140" y="335" width="60" height="60" rx="5" fill="#e0e0e0"/>
            <text x="170" y="370" font-family="Arial" font-size="30" fill="#999" text-anchor="middle">👟</text>
            
            <rect x="210" y="335" width="60" height="60" rx="5" fill="#e0e0e0"/>
            <text x="240" y="370" font-family="Arial" font-size="30" fill="#999" text-anchor="middle">👟</text>
            
            <rect x="280" y="335" width="60" height="60" rx="5" fill="#e0e0e0"/>
            <text x="310" y="370" font-family="Arial" font-size="30" fill="#999" text-anchor="middle">👟</text>
            
            <!-- Botones -->
            <rect x="360" y="350" width="80" height="30" rx="8" fill="#727273"/>
            <text x="400" y="370" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle">Cancelar</text>
            
            <rect x="450" y="350" width="80" height="30" rx="8" fill="#28a745"/>
            <text x="490" y="370" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">Guardar</text>
            
            <!-- Info boxes -->
            <rect x="70" y="405" width="150" height="8" rx="4" fill="#F71963"/>
            <text x="75" y="415" font-family="Arial" font-size="8" fill="#727273">✓ Marca configurada</text>
            
            <rect x="230" y="405" width="150" height="8" rx="4" fill="#F71963"/>
            <text x="235" y="415" font-family="Arial" font-size="8" fill="#727273">✓ Categoría asignada</text>
            
            <rect x="390" y="405" width="140" height="8" rx="4" fill="#28a745"/>
            <text x="395" y="415" font-family="Arial" font-size="8" fill="#727273">✓ Similares añadidos</text>
        </svg>
    `,
    collapseFour: `
        <svg class="preview-image" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <!-- Order flow -->
            <text x="300" y="40" font-family="Arial" font-size="18" fill="#142032" text-anchor="middle" font-weight="bold">Flujo de Pedidos</text>
            
            <!-- Step 1 -->
            <circle cx="100" cy="120" r="35" fill="#ffc107"/>
            <text x="100" y="128" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="bold">1</text>
            <text x="100" y="170" font-family="Arial" font-size="11" fill="#142032" text-anchor="middle">Pendiente</text>
            
            <!-- Arrow -->
            <path d="M 140 120 L 170 120" stroke="#727273" stroke-width="3" fill="none"/>
            <polygon points="170,120 160,115 160,125" fill="#727273"/>
            
            <!-- Step 2 -->
            <circle cx="210" cy="120" r="35" fill="#28a745"/>
            <text x="210" y="128" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="bold">2</text>
            <text x="210" y="170" font-family="Arial" font-size="11" fill="#142032" text-anchor="middle">Aprobado</text>
            
            <!-- Arrow -->
            <path d="M 250 120 L 280 120" stroke="#727273" stroke-width="3" fill="none"/>
            <polygon points="280,120 270,115 270,125" fill="#727273"/>
            
            <!-- Step 3 -->
            <circle cx="320" cy="120" r="35" fill="#F71963"/>
            <text x="320" y="128" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="bold">3</text>
            <text x="320" y="170" font-family="Arial" font-size="11" fill="#142032" text-anchor="middle">Preparando</text>
            
            <!-- Arrow -->
            <path d="M 360 120 L 390 120" stroke="#727273" stroke-width="3" fill="none"/>
            <polygon points="390,120 380,115 380,125" fill="#727273"/>
            
            <!-- Step 4 -->
            <circle cx="430" cy="120" r="35" fill="#142032"/>
            <text x="430" y="128" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="bold">4</text>
            <text x="430" y="170" font-family="Arial" font-size="11" fill="#142032" text-anchor="middle">Enviado</text>
            
            <!-- Arrow -->
            <path d="M 470 120 L 500 120" stroke="#727273" stroke-width="3" fill="none"/>
            <polygon points="500,120 490,115 490,125" fill="#727273"/>
            
            <!-- Step 5 -->
            <circle cx="540" cy="120" r="35" fill="#28a745"/>
            <text x="540" y="125" font-family="Arial" font-size="20" fill="#ffffff" text-anchor="middle">✓</text>
            <text x="540" y="170" font-family="Arial" font-size="11" fill="#142032" text-anchor="middle">Entregado</text>
            
            <!-- Order details card -->
            <rect x="150" y="220" width="300" height="140" rx="10" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
            <text x="300" y="245" font-family="Arial" font-size="14" fill="#142032" text-anchor="middle" font-weight="bold">Pedido #12345</text>
            
            <text x="170" y="270" font-family="Arial" font-size="11" fill="#727273">Cliente: Juan Pérez</text>
            <text x="170" y="290" font-family="Arial" font-size="11" fill="#727273">Productos: 3 items</text>
            <text x="170" y="310" font-family="Arial" font-size="11" fill="#727273">Total: $150.00</text>
            <text x="170" y="330" font-family="Arial" font-size="11" fill="#727273">Estado: En tránsito 🚚</text>
            
            <rect x="350" y="325" width="80" height="25" rx="5" fill="#F71963"/>
            <text x="390" y="342" font-family="Arial" font-size="10" fill="#ffffff" text-anchor="middle">Ver detalles</text>
        </svg>
    `,
    collapseFive: `
        <svg class="preview-image" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <!-- Promotions -->
            <text x="300" y="40" font-family="Arial" font-size="18" fill="#142032" text-anchor="middle" font-weight="bold">Tipos de Promociones</text>
            
            <!-- Card 1 -->
            <rect x="80" y="70" width="200" height="120" rx="10" fill="#fff5f8" stroke="#F71963" stroke-width="2"/>
            <text x="180" y="100" font-size="40" text-anchor="middle">💰</text>
            <text x="180" y="130" font-family="Arial" font-size="14" fill="#142032" text-anchor="middle" font-weight="bold">Regular</text>
            <text x="180" y="150" font-family="Arial" font-size="11" fill="#727273" text-anchor="middle">Descuento en</text>
            <text x="180" y="165" font-family="Arial" font-size="11" fill="#727273" text-anchor="middle">productos</text>
            <text x="180" y="180" font-family="Arial" font-size="16" fill="#F71963" text-anchor="middle" font-weight="bold">30% OFF</text>
            
            <!-- Card 2 -->
            <rect x="320" y="70" width="200" height="120" rx="10" fill="#f0f8ff" stroke="#142032" stroke-width="2"/>
            <text x="420" y="100" font-size="40" text-anchor="middle">🎁</text>
            <text x="420" y="130" font-family="Arial" font-size="14" fill="#142032" text-anchor="middle" font-weight="bold">Compre y Gane</text>
            <text x="420" y="150" font-family="Arial" font-size="11" fill="#727273" text-anchor="middle">Lleva 3</text>
            <text x="420" y="165" font-family="Arial" font-size="11" fill="#727273" text-anchor="middle">Paga 2</text>
            <text x="420" y="180" font-family="Arial" font-size="16" fill="#142032" text-anchor="middle" font-weight="bold">3x2</text>
            
            <!-- Card 3 -->
            <rect x="80" y="210" width="200" height="120" rx="10" fill="#e8f5e9" stroke="#28a745" stroke-width="2"/>
            <text x="180" y="240" font-size="40" text-anchor="middle">📦</text>
            <text x="180" y="270" font-family="Arial" font-size="14" fill="#142032" text-anchor="middle" font-weight="bold">Envío Gratis</text>
            <text x="180" y="290" font-family="Arial" font-size="11" fill="#727273" text-anchor="middle">En compras</text>
            <text x="180" y="305" font-family="Arial" font-size="11" fill="#727273" text-anchor="middle">mayores a</text>
            <text x="180" y="320" font-family="Arial" font-size="16" fill="#28a745" text-anchor="middle" font-weight="bold">$50</text>
            
            <!-- Card 4 -->
            <rect x="320" y="210" width="200" height="120" rx="10" fill="#fff8e1" stroke="#ffc107" stroke-width="2"/>
            <text x="420" y="240" font-size="40" text-anchor="middle">🏷️</text>
            <text x="420" y="270" font-family="Arial" font-size="14" fill="#142032" text-anchor="middle" font-weight="bold">Cupón</text>
            <text x="420" y="290" font-family="Arial" font-size="11" fill="#727273" text-anchor="middle">Código</text>
            <text x="420" y="305" font-family="Arial" font-size="11" fill="#727273" text-anchor="middle">promocional</text>
            <rect x="365" y="310" width="110" height="20" rx="5" fill="#ffc107"/>
            <text x="420" y="324" font-family="monospace" font-size="10" fill="#142032" text-anchor="middle" font-weight="bold">SAVE20</text>
        </svg>
    `,
    collapseSix: `
        <svg class="preview-image" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <!-- Settings sections -->
            <text x="300" y="40" font-family="Arial" font-size="18" fill="#142032" text-anchor="middle" font-weight="bold">Configuraciones Principales</text>
            
            <!-- Grid of settings -->
            <rect x="80" y="70" width="140" height="100" rx="8" fill="#fff5f8" stroke="#F71963" stroke-width="2"/>
            <text x="150" y="100" font-size="35" text-anchor="middle">💳</text>
            <text x="150" y="130" font-family="Arial" font-size="13" fill="#142032" text-anchor="middle" font-weight="bold">Pagos</text>
            <text x="150" y="150" font-family="Arial" font-size="10" fill="#727273" text-anchor="middle">Métodos de pago</text>
            
            <rect x="240" y="70" width="140" height="100" rx="8" fill="#f0f8ff" stroke="#142032" stroke-width="2"/>
            <text x="310" y="100" font-size="35" text-anchor="middle">🚚</text>
            <text x="310" y="130" font-family="Arial" font-size="13" fill="#142032" text-anchor="middle" font-weight="bold">Envíos</text>
            <text x="310" y="150" font-family="Arial" font-size="10" fill="#727273" text-anchor="middle">Logística</text>
            
            <rect x="400" y="70" width="140" height="100" rx="8" fill="#e8f5e9" stroke="#28a745" stroke-width="2"/>
            <text x="470" y="100" font-size="35" text-anchor="middle">🏪</text>
            <text x="470" y="130" font-family="Arial" font-size="13" fill="#142032" text-anchor="middle" font-weight="bold">Tienda</text>
            <text x="470" y="150" font-family="Arial" font-size="10" fill="#727273" text-anchor="middle">Datos generales</text>
            
            <rect x="80" y="190" width="140" height="100" rx="8" fill="#fff8e1" stroke="#ffc107" stroke-width="2"/>
            <text x="150" y="220" font-size="35" text-anchor="middle">📧</text>
            <text x="150" y="250" font-family="Arial" font-size="13" fill="#142032" text-anchor="middle" font-weight="bold">Emails</text>
            <text x="150" y="270" font-family="Arial" font-size="10" fill="#727273" text-anchor="middle">Plantillas</text>
            
            <rect x="240" y="190" width="140" height="100" rx="8" fill="#f3e5f5" stroke="#9c27b0" stroke-width="2"/>
            <text x="310" y="220" font-size="35" text-anchor="middle">👥</text>
            <text x="310" y="250" font-family="Arial" font-size="13" fill="#142032" text-anchor="middle" font-weight="bold">Usuarios</text>
            <text x="310" y="270" font-family="Arial" font-size="10" fill="#727273" text-anchor="middle">Roles y permisos</text>
            
            <rect x="400" y="190" width="140" height="100" rx="8" fill="#fce4ec" stroke="#F71963" stroke-width="2"/>
            <text x="470" y="220" font-size="35" text-anchor="middle">⚙️</text>
            <text x="470" y="250" font-family="Arial" font-size="13" fill="#142032" text-anchor="middle" font-weight="bold">Avanzado</text>
            <text x="470" y="270" font-family="Arial" font-size="10" fill="#727273" text-anchor="middle">APIs y más</text>
            
            <!-- Checklist -->
            <rect x="100" y="310" width="400" height="60" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
            <text x="300" y="330" font-family="Arial" font-size="12" fill="#727273" text-anchor="middle">Checklist de configuración inicial</text>
            <text x="120" y="350" font-family="Arial" font-size="10" fill="#28a745">✓ Pagos configurados</text>
            <text x="280" y="350" font-family="Arial" font-size="10" fill="#28a745">✓ Envíos activos</text>
            <text x="430" y="350" font-family="Arial" font-size="10" fill="#ffc107">⚠ Emails pendientes</text>
        </svg>
    `
};

// Función para actualizar el preview
function updatePreview(collapseId) {
    const previewContainer = document.querySelector('.preview-content');
    if (previewContent[collapseId]) {
        previewContainer.innerHTML = previewContent[collapseId];
    }
}

// Escuchar cambios en los acordeones
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-collapse');
    
    accordionItems.forEach(item => {
        item.addEventListener('show.bs.collapse', function() {
            updatePreview(this.id);
        });
    });
});
