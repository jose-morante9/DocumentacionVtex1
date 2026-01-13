// Contenido para cada sección
const previewContent = {
    collapseOne: `
        <svg class="preview-image" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <!-- Estructura de carpetas -->
            <text x="80" y="80" font-family="Arial" font-size="18" fill="#142032" font-weight="bold">📁 store-theme/</text>
            
            <text x="100" y="110" font-family="monospace" font-size="14" fill="#F71963">├── 📁 store/</text>
            <text x="120" y="135" font-family="monospace" font-size="13" fill="#727273">│   ├── 📁 blocks/</text>
            <text x="140" y="160" font-family="monospace" font-size="12" fill="#999">│   │   ├── home.jsonc</text>
            <text x="140" y="180" font-family="monospace" font-size="12" fill="#999">│   │   ├── product.jsonc</text>
            <text x="140" y="200" font-family="monospace" font-size="12" fill="#999">│   │   └── search.jsonc</text>
            
            <text x="100" y="230" font-family="monospace" font-size="14" fill="#F71963">├── 📁 styles/</text>
            <text x="120" y="255" font-family="monospace" font-size="13" fill="#727273">│   ├── css/</text>
            <text x="120" y="275" font-family="monospace" font-size="13" fill="#727273">│   └── configs/</text>
            
            <text x="100" y="305" font-family="monospace" font-size="14" fill="#F71963">├── 📁 assets/</text>
            <text x="100" y="330" font-family="monospace" font-size="14" fill="#F71963">└── 📄 manifest.json</text>
        </svg>
    `,
    collapseTwo: `
        <svg class="preview-image" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <!-- Terminal -->
            <rect x="50" y="50" width="500" height="300" rx="10" fill="#1e1e1e"/>
            <rect x="50" y="50" width="500" height="30" rx="10" fill="#323233"/>
            <circle cx="70" cy="65" r="5" fill="#ff5f57"/>
            <circle cx="90" cy="65" r="5" fill="#ffbd2e"/>
            <circle cx="110" cy="65" r="5" fill="#28ca42"/>
            <text x="275" y="70" font-family="monospace" font-size="12" fill="#fff" text-anchor="middle">create-theme</text>
            
            <text x="70" y="110" font-family="monospace" font-size="14" fill="#4EC9B0">$ vtex init</text>
            <text x="70" y="135" font-family="monospace" font-size="12" fill="#CE9178">? Choose where to start:</text>
            <text x="70" y="160" font-family="monospace" font-size="12" fill="#fff">&gt; store-theme</text>
            
            <text x="70" y="200" font-family="monospace" font-size="14" fill="#4EC9B0">$ vtex link</text>
            <text x="70" y="225" font-family="monospace" font-size="12" fill="#6A9955">✓ Theme linked successfully</text>
            <text x="70" y="245" font-family="monospace" font-size="12" fill="#6A9955">✓ Hot reload enabled</text>
            
            <text x="70" y="280" font-family="monospace" font-size="14" fill="#4EC9B0">$ vtex browse</text>
            <text x="70" y="305" font-family="monospace" font-size="12" fill="#CE9178">Opening: workspace--account.myvtex.com</text>
            
            <rect x="70" y="315" width="10" height="15" fill="#fff">
                <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
            </rect>
        </svg>
    `,
    collapseThree: `
        <svg class="preview-image" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <!-- Bloques JSON visualización -->
            <rect x="80" y="60" width="200" height="280" rx="8" fill="#f8f9fa" stroke="#F71963" stroke-width="2"/>
            <text x="180" y="90" font-family="Arial" font-size="14" fill="#142032" text-anchor="middle" font-weight="bold">Bloques JSON</text>
            
            <!-- Bloque 1 -->
            <rect x="100" y="110" width="160" height="50" rx="5" fill="#fff5f8" stroke="#F71963" stroke-width="1"/>
            <text x="180" y="135" font-family="monospace" font-size="11" fill="#F71963" text-anchor="middle">rich-text#banner</text>
            
            <!-- Bloque 2 -->
            <rect x="100" y="170" width="160" height="50" rx="5" fill="#fff5f8" stroke="#F71963" stroke-width="1"/>
            <text x="180" y="195" font-family="monospace" font-size="11" fill="#F71963" text-anchor="middle">flex-layout.row</text>
            
            <!-- Bloque 3 -->
            <rect x="100" y="230" width="160" height="50" rx="5" fill="#fff5f8" stroke="#F71963" stroke-width="1"/>
            <text x="180" y="255" font-family="monospace" font-size="11" fill="#F71963" text-anchor="middle">product-summary</text>
            
            <!-- Flecha -->
            <path d="M 290 200 L 330 200" stroke="#142032" stroke-width="3" fill="none"/>
            <polygon points="330,200 320,195 320,205" fill="#142032"/>
            
            <!-- Resultado visual -->
            <rect x="340" y="60" width="180" height="280" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
            <text x="430" y="90" font-family="Arial" font-size="14" fill="#142032" text-anchor="middle" font-weight="bold">Vista en Store</text>
            
            <rect x="360" y="110" width="140" height="40" rx="5" fill="url(#gradBanner)"/>
            <text x="430" y="135" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle">BANNER</text>
            
            <rect x="360" y="165" width="60" height="60" rx="5" fill="#f8f9fa" stroke="#F71963" stroke-width="1"/>
            <rect x="430" y="165" width="60" height="60" rx="5" fill="#f8f9fa" stroke="#F71963" stroke-width="1"/>
            <rect x="360" y="240" width="60" height="60" rx="5" fill="#f8f9fa" stroke="#F71963" stroke-width="1"/>
            <rect x="430" y="240" width="60" height="60" rx="5" fill="#f8f9fa" stroke="#F71963" stroke-width="1"/>
            
            <defs>
                <linearGradient id="gradBanner" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#F71963;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#142032;stop-opacity:1" />
                </linearGradient>
            </defs>
        </svg>
    `,
    collapseFour: `
        <svg class="preview-image" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <!-- Paleta de colores -->
            <text x="300" y="50" font-family="Arial" font-size="20" fill="#142032" text-anchor="middle" font-weight="bold">Paleta de Colores</text>
            
            <!-- Color primario -->
            <circle cx="150" cy="130" r="40" fill="#F71963"/>
            <text x="150" y="190" font-family="Arial" font-size="12" fill="#142032" text-anchor="middle" font-weight="bold">Primary</text>
            <text x="150" y="210" font-family="monospace" font-size="10" fill="#727273" text-anchor="middle">#F71963</text>
            
            <!-- Color secundario -->
            <circle cx="300" cy="130" r="40" fill="#142032"/>
            <text x="300" y="190" font-family="Arial" font-size="12" fill="#142032" text-anchor="middle" font-weight="bold">Secondary</text>
            <text x="300" y="210" font-family="monospace" font-size="10" fill="#727273" text-anchor="middle">#142032</text>
            
            <!-- Color success -->
            <circle cx="450" cy="130" r="40" fill="#28a745"/>
            <text x="450" y="190" font-family="Arial" font-size="12" fill="#142032" text-anchor="middle" font-weight="bold">Success</text>
            <text x="450" y="210" font-family="monospace" font-size="10" fill="#727273" text-anchor="middle">#28a745</text>
            
            <!-- Ejemplo de card con estilos -->
            <rect x="100" y="250" width="400" height="100" rx="10" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
            <rect x="120" y="270" width="100" height="60" rx="5" fill="#f8f9fa"/>
            
            <text x="240" y="280" font-family="Arial" font-size="14" fill="#142032" font-weight="bold">Producto Demo</text>
            <text x="240" y="305" font-family="Arial" font-size="18" fill="#F71963" font-weight="bold">$99.99</text>
            <rect x="240" y="315" width="80" height="25" rx="5" fill="#F71963"/>
            <text x="280" y="332" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle">Comprar</text>
        </svg>
    `,
    collapseFive: `
        <svg class="preview-image" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <!-- Layouts de páginas -->
            <text x="300" y="40" font-family="Arial" font-size="18" fill="#142032" text-anchor="middle" font-weight="bold">Templates de Páginas</text>
            
            <!-- Home -->
            <rect x="80" y="70" width="200" height="120" rx="8" fill="#ffffff" stroke="#F71963" stroke-width="2"/>
            <text x="180" y="95" font-family="Arial" font-size="14" fill="#F71963" text-anchor="middle" font-weight="bold">🏠 HOME</text>
            <rect x="100" y="105" width="160" height="20" rx="3" fill="#F71963"/>
            <rect x="100" y="130" width="70" height="50" rx="3" fill="#f8f9fa" stroke="#e0e0e0"/>
            <rect x="190" y="130" width="70" height="50" rx="3" fill="#f8f9fa" stroke="#e0e0e0"/>
            
            <!-- Product -->
            <rect x="320" y="70" width="200" height="120" rx="8" fill="#ffffff" stroke="#142032" stroke-width="2"/>
            <text x="420" y="95" font-family="Arial" font-size="14" fill="#142032" text-anchor="middle" font-weight="bold">📦 PRODUCT</text>
            <rect x="340" y="105" width="80" height="70" rx="3" fill="#f8f9fa" stroke="#e0e0e0"/>
            <rect x="430" y="105" width="80" height="20" rx="3" fill="#F71963"/>
            <rect x="430" y="130" width="80" height="15" rx="3" fill="#e0e0e0"/>
            <rect x="430" y="150" width="50" height="25" rx="3" fill="#28a745"/>
            
            <!-- Search -->
            <rect x="80" y="210" width="200" height="120" rx="8" fill="#ffffff" stroke="#28a745" stroke-width="2"/>
            <text x="180" y="235" font-family="Arial" font-size="14" fill="#28a745" text-anchor="middle" font-weight="bold">🔍 SEARCH</text>
            <rect x="100" y="245" width="160" height="15" rx="3" fill="#e0e0e0"/>
            <rect x="100" y="265" width="70" height="55" rx="3" fill="#f8f9fa" stroke="#e0e0e0"/>
            <rect x="190" y="265" width="70" height="55" rx="3" fill="#f8f9fa" stroke="#e0e0e0"/>
            
            <!-- Cart -->
            <rect x="320" y="210" width="200" height="120" rx="8" fill="#ffffff" stroke="#ffc107" stroke-width="2"/>
            <text x="420" y="235" font-family="Arial" font-size="14" fill="#ffc107" text-anchor="middle" font-weight="bold">🛒 CART</text>
            <rect x="340" y="245" width="160" height="30" rx="3" fill="#f8f9fa" stroke="#e0e0e0"/>
            <rect x="340" y="280" width="160" height="30" rx="3" fill="#f8f9fa" stroke="#e0e0e0"/>
        </svg>
    `,
    collapseSix: `
        <svg class="preview-image" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <!-- Terminal comandos -->
            <rect x="50" y="50" width="500" height="300" rx="10" fill="#1e1e1e"/>
            <rect x="50" y="50" width="500" height="30" rx="10" fill="#323233"/>
            <circle cx="70" cy="65" r="5" fill="#ff5f57"/>
            <circle cx="90" cy="65" r="5" fill="#ffbd2e"/>
            <circle cx="110" cy="65" r="5" fill="#28ca42"/>
            <text x="275" y="70" font-family="monospace" font-size="12" fill="#fff" text-anchor="middle">vtex-commands</text>
            
            <text x="70" y="110" font-family="monospace" font-size="13" fill="#4EC9B0">$ vtex link</text>
            <text x="70" y="130" font-family="monospace" font-size="11" fill="#6A9955">✓ Linked in 3.2s</text>
            
            <text x="70" y="165" font-family="monospace" font-size="13" fill="#4EC9B0">$ vtex browse</text>
            <text x="70" y="185" font-family="monospace" font-size="11" fill="#CE9178">Opening store...</text>
            
            <text x="70" y="220" font-family="monospace" font-size="13" fill="#4EC9B0">$ vtex publish</text>
            <text x="70" y="240" font-family="monospace" font-size="11" fill="#6A9955">✓ Published version 1.0.1</text>
            
            <text x="70" y="275" font-family="monospace" font-size="13" fill="#4EC9B0">$ vtex workspace promote</text>
            <text x="70" y="295" font-family="monospace" font-size="11" fill="#CE9178">⚠ Promoting to master...</text>
            <text x="70" y="315" font-family="monospace" font-size="11" fill="#6A9955">✓ Promoted successfully</text>
            
            <rect x="70" y="325" width="10" height="15" fill="#fff">
                <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
            </rect>
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
