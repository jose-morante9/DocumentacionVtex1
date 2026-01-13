const previewContent = {
    collapseOne: `
        <svg class="preview-image" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="500" height="300" rx="10" fill="#1e1e1e"/>
            <rect x="50" y="50" width="500" height="30" rx="10" fill="#323233"/>
            <circle cx="70" cy="65" r="5" fill="#ff5f57"/>
            <circle cx="90" cy="65" r="5" fill="#ffbd2e"/>
            <circle cx="110" cy="65" r="5" fill="#28ca42"/>
            <text x="275" y="70" font-family="monospace" font-size="12" fill="#fff" text-anchor="middle">vtex-terminal</text>
            
            <text x="70" y="110" font-family="monospace" font-size="14" fill="#4EC9B0">$ vtex init</text>
            <text x="70" y="135" font-family="monospace" font-size="12" fill="#CE9178">? Choose template</text>
            <text x="70" y="155" font-family="monospace" font-size="12" fill="#fff">&gt; edition app</text>
            <text x="70" y="175" font-family="monospace" font-size="12" fill="#808080">  store theme</text>
            
            <text x="70" y="210" font-family="monospace" font-size="14" fill="#4EC9B0">$ vtex link</text>
            <text x="70" y="235" font-family="monospace" font-size="12" fill="#6A9955">✓ App linked</text>
            
            <text x="70" y="270" font-family="monospace" font-size="14" fill="#4EC9B0">$ vtex publish</text>
            <text x="70" y="295" font-family="monospace" font-size="12" fill="#6A9955">✓ Published successfully</text>
            
            <rect x="70" y="305" width="10" height="15" fill="#fff">
                <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
            </rect>
        </svg>
    `,
    collapseTwo: `
        <svg class="preview-image" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <!-- Tienda Normal -->
            <g id="normal-store">
                <rect x="50" y="80" width="150" height="120" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
                <text x="125" y="110" font-family="Arial" font-size="14" fill="#142032" text-anchor="middle" font-weight="bold">Tienda Normal</text>
                <rect x="70" y="125" width="110" height="8" rx="4" fill="#e0e0e0"/>
                <rect x="70" y="145" width="110" height="8" rx="4" fill="#e0e0e0"/>
                <rect x="70" y="165" width="110" height="8" rx="4" fill="#e0e0e0"/>
            </g>
            
            <!-- Flecha -->
            <path d="M 210 140 L 240 140" stroke="#F71963" stroke-width="3" fill="none"/>
            <polygon points="240,140 230,135 230,145" fill="#F71963"/>
            
            <!-- Edition Black Friday -->
            <g id="bf-store">
                <rect x="250" y="80" width="150" height="120" rx="8" fill="#1a1a1a" stroke="#F71963" stroke-width="3"/>
                <text x="325" y="110" font-family="Arial" font-size="14" fill="#ffc107" text-anchor="middle" font-weight="bold">Black Friday</text>
                <rect x="270" y="125" width="110" height="8" rx="4" fill="#F71963"/>
                <rect x="270" y="145" width="110" height="8" rx="4" fill="#F71963"/>
                <rect x="270" y="165" width="110" height="8" rx="4" fill="#F71963"/>
                <circle cx="285" cy="175" r="3" fill="#ffc107">
                    <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
                </circle>
            </g>
            
            <!-- Flecha reverse -->
            <path d="M 240 180 L 210 180" stroke="#727273" stroke-width="2" fill="none" stroke-dasharray="5,5"/>
            <polygon points="210,180 220,175 220,185" fill="#727273"/>
            
            <!-- Texto inferior -->
            <text x="300" y="240" font-family="Arial" font-size="16" fill="#F71963" text-anchor="middle" font-weight="bold">vtex edition set</text>
            <text x="300" y="265" font-family="Arial" font-size="12" fill="#727273" text-anchor="middle">Cambio automático de theme,</text>
            <text x="300" y="285" font-family="Arial" font-size="12" fill="#727273" text-anchor="middle">apps y configuraciones</text>
        </svg>
    `,
    collapseThree: `
        <svg class="preview-image" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <!-- Grid de casos de uso -->
            <g id="caso1">
                <rect x="80" y="70" width="120" height="100" rx="10" fill="#fff5f8" stroke="#F71963" stroke-width="2"/>
                <text x="140" y="100" font-size="40" text-anchor="middle">🎄</text>
                <text x="140" y="135" font-family="Arial" font-size="14" fill="#142032" text-anchor="middle" font-weight="bold">Navidad</text>
                <text x="140" y="155" font-family="Arial" font-size="10" fill="#727273" text-anchor="middle">Edition temporal</text>
            </g>
            
            <g id="caso2">
                <rect x="240" y="70" width="120" height="100" rx="10" fill="#f0f8ff" stroke="#142032" stroke-width="2"/>
                <text x="300" y="100" font-size="40" text-anchor="middle">🏢</text>
                <text x="300" y="135" font-family="Arial" font-size="14" fill="#142032" text-anchor="middle" font-weight="bold">B2B</text>
                <text x="300" y="155" font-family="Arial" font-size="10" fill="#727273" text-anchor="middle">Precios mayorista</text>
            </g>
            
            <g id="caso3">
                <rect x="400" y="70" width="120" height="100" rx="10" fill="#fff8e1" stroke="#ffc107" stroke-width="2"/>
                <text x="460" y="100" font-size="40" text-anchor="middle">⭐</text>
                <text x="460" y="135" font-family="Arial" font-size="14" fill="#142032" text-anchor="middle" font-weight="bold">VIP</text>
                <text x="460" y="155" font-family="Arial" font-size="10" fill="#727273" text-anchor="middle">Clientes premium</text>
            </g>
            
            <g id="caso4">
                <rect x="160" y="220" width="120" height="100" rx="10" fill="#e8f5e9" stroke="#28a745" stroke-width="2"/>
                <text x="220" y="250" font-size="40" text-anchor="middle">🌎</text>
                <text x="220" y="285" font-family="Arial" font-size="14" fill="#142032" text-anchor="middle" font-weight="bold">Regional</text>
                <text x="220" y="305" font-family="Arial" font-size="10" fill="#727273" text-anchor="middle">Por país/idioma</text>
            </g>
            
            <g id="caso5">
                <rect x="320" y="220" width="120" height="100" rx="10" fill="#fce4ec" stroke="#F71963" stroke-width="2"/>
                <text x="380" y="250" font-size="40" text-anchor="middle">🛍️</text>
                <text x="380" y="285" font-family="Arial" font-size="14" fill="#142032" text-anchor="middle" font-weight="bold">Black Friday</text>
                <text x="380" y="305" font-family="Arial" font-size="10" fill="#727273" text-anchor="middle">Eventos especiales</text>
            </g>
        </svg>
    `,
    collapseFour: `
        <svg class="preview-image" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="500" height="300" rx="10" fill="#1e1e1e"/>
            <rect x="50" y="50" width="500" height="30" rx="10" fill="#323233"/>
            <circle cx="70" cy="65" r="5" fill="#ff5f57"/>
            <circle cx="90" cy="65" r="5" fill="#ffbd2e"/>
            <circle cx="110" cy="65" r="5" fill="#28ca42"/>
            <text x="275" y="70" font-family="monospace" font-size="12" fill="#fff" text-anchor="middle">comandos-vtex</text>
            
            <text x="70" y="110" font-family="monospace" font-size="13" fill="#4EC9B0">$ vtex edition get</text>
            <text x="70" y="130" font-family="monospace" font-size="11" fill="#CE9178">Current: vtex.edition-store@5.x</text>
            
            <text x="70" y="165" font-family="monospace" font-size="13" fill="#4EC9B0">$ vtex use bf --edition mystore.bf@1.0.0</text>
            <text x="70" y="185" font-family="monospace" font-size="11" fill="#6A9955">✓ Workspace created</text>
            <text x="70" y="200" font-family="monospace" font-size="11" fill="#6A9955">✓ Edition applied</text>
            
            <text x="70" y="235" font-family="monospace" font-size="13" fill="#4EC9B0">$ vtex workspace promote</text>
            <text x="70" y="255" font-family="monospace" font-size="11" fill="#CE9178">⚠ This will affect production</text>
            <text x="70" y="270" font-family="monospace" font-size="11" fill="#fff">Continue? (y/n)</text>
            
            <text x="70" y="305" font-family="monospace" font-size="13" fill="#4EC9B0">$ vtex edition set mystore.bf@1.0.0</text>
            <text x="70" y="325" font-family="monospace" font-size="11" fill="#6A9955">✓ Edition updated</text>
            
            <rect x="70" y="330" width="10" height="15" fill="#fff">
                <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
            </rect>
        </svg>
    `,
    collapseFive: `
        <svg class="preview-image" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <!-- Logo React -->
            <circle cx="300" cy="120" r="40" fill="none" stroke="#61dafb" stroke-width="6"/>
            <ellipse cx="300" cy="120" rx="100" ry="40" fill="none" stroke="#61dafb" stroke-width="6"/>
            <ellipse cx="300" cy="120" rx="100" ry="40" fill="none" stroke="#61dafb" stroke-width="6" transform="rotate(60 300 120)"/>
            <ellipse cx="300" cy="120" rx="100" ry="40" fill="none" stroke="#61dafb" stroke-width="6" transform="rotate(120 300 120)"/>
            <circle cx="300" cy="120" r="10" fill="#61dafb"/>
            
            <!-- VTEX + React -->
            <text x="300" y="200" font-family="Arial" font-size="28" fill="#F71963" text-anchor="middle" font-weight="bold">VTEX IO</text>
            <text x="300" y="230" font-family="Arial" font-size="20" fill="#61dafb" text-anchor="middle">+</text>
            <text x="300" y="260" font-family="Arial" font-size="28" fill="#61dafb" text-anchor="middle" font-weight="bold">React</text>
            
            <!-- Estructura de archivos -->
            <g transform="translate(100, 280)">
                <text x="0" y="0" font-family="monospace" font-size="12" fill="#142032">📁 react/</text>
                <text x="20" y="20" font-family="monospace" font-size="11" fill="#727273">├── 📄 package.json</text>
                <text x="20" y="38" font-family="monospace" font-size="11" fill="#727273">├── 📄 tsconfig.json</text>
                <text x="20" y="56" font-family="monospace" font-size="11" fill="#727273">└── 📁 components/</text>
                <text x="60" y="74" font-family="monospace" font-size="11" fill="#F71963" font-weight="bold">└── MyComponent.tsx</text>
            </g>
        </svg>
    `,
    collapseSix: `
        <svg class="preview-image" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <!-- Navegador simulado -->
            <rect x="80" y="60" width="440" height="280" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
            <rect x="80" y="60" width="440" height="30" rx="8" fill="#f0f0f0"/>
            <circle cx="100" cy="75" r="5" fill="#ff5f57"/>
            <circle cx="120" cy="75" r="5" fill="#ffbd2e"/>
            <circle cx="140" cy="75" r="5" fill="#28ca42"/>
            <text x="260" y="80" font-family="Arial" font-size="11" fill="#999" text-anchor="middle">localhost:3000</text>
            
            <!-- Componente Hello World -->
            <rect x="150" y="130" width="300" height="140" rx="10" fill="#F71963"/>
            <text x="300" y="175" font-family="Arial" font-size="32" fill="#ffffff" text-anchor="middle" font-weight="bold">¡Hola Mundo!</text>
            <text x="300" y="210" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">Mi primer componente</text>
            <text x="300" y="235" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">en VTEX IO</text>
            
            <!-- Código abajo -->
            <text x="300" y="365" font-family="monospace" font-size="16" fill="#142032" text-anchor="middle" font-weight="bold">&lt;HelloWorld name="Mundo" /&gt;</text>
        </svg>
    `
};

function updatePreview(collapseId) {
    const previewContainer = document.querySelector('.preview-content');
    if (previewContent[collapseId]) {
        previewContainer.innerHTML = previewContent[collapseId];
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-collapse');
    
    accordionItems.forEach(item => {
        item.addEventListener('show.bs.collapse', function() {
            updatePreview(this.id);
        });
    });
});
