# {{PROJECT_NAME}}

{{DESCRIPTION}}

---

## Requisitos

- Node.js 18 o superior

---

## Instalación

```bash
npm install

Desarrollo
npm run dev

Estructura del proyecto

src/
├── api/              # Clientes HTTP (axios)
├── assets/           # Recursos estáticos (imágenes, fuentes)
├── features/         # Features organizadas por dominio
│   └── home/
│       ├── components/
│       └── pages/
├── locales/          # Traducciones (i18n)
├── routes/           # Configuración de rutas
├── shared/           # Código compartido entre features
│   ├── components/
│   ├── constants/
│   ├── contexts/
│   ├── hooks/
│   ├── layouts/
│   ├── services/
│   └── utils/
├── styles/           # Estilos globales
├── App.jsx
├── index.css
└── main.jsx
Organización por features
Cada feature vive en src/features/<nombre>/ y contiene:

components/ → componentes específicos de la feature

pages/ → páginas de la feature

hooks/ → hooks específicos (si aplica)

services/ → servicios específicos (si aplica)

data/ → datos estáticos (si aplica)

Todo lo reutilizable va en src/shared/.
