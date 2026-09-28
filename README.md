# Project Manager - Templates

Recursos oficiales para [Project Manager](https://github.com/maxi-hahn/project-manager).

Este repositorio contiene los templates, tools, features, environments
y technologies oficiales.

## 📁 Estructura

- **`TEMPLATES/`** — Estructuras base de proyectos (CLI, Web API, Web App).
- **`TOOLS/`** — Herramientas de desarrollo (Pytest, Ruff, Prettier).
- **`FEATURES/`** — Módulos funcionales reutilizables (Pagination, React Router, Axios, etc.).
- **`ENVIRONMENTS/`** — Configuraciones de entorno (Docker).
- **`TECHNOLOGIES/`** — Bibliotecas y frameworks (Tailwind, SQLAlchemy).

## 🚀 Cómo usar estos recursos

### Opción 1: Descarga automática desde Project Manager

Project Manager puede descargar estos recursos automáticamente desde la GUI.
Buscá el botón **"Obtener templates"** en Ajustes.

### Opción 2: Clonar manualmente

```bash
git clone https://github.com/maxi-hahn/project-manager-templates.git
```

Luego, en Project Manager, configurá `resources_root` apuntando a esta carpeta:

1. Abrí Project Manager.
2. Ajustes → Carpeta de recursos.
3. Seleccioná la carpeta clonada.
4. Guardar.

## 🛠️ Crear tus propios recursos

¿Querés agregar tu propio template, tool, feature, environment o
technology? Mirá la guía completa en el
[README del proyecto principal](https://github.com/maxi-hahn/project-manager#-crear-tu-propio-template).

## 🤝 Contribuir

¡Las contribuciones son bienvenidas!

1. Hacé un fork de este repositorio.
2. Agregá o modificá el recurso que quieras.
3. Mandá un Pull Request.

### Reglas básicas para contribuir

- Cada recurso debe tener su archivo de metadata (`.json`).
- Los archivos a copiar van dentro de la carpeta `files/`.
- **NO subas `node_modules/`, `.venv/` ni carpetas de dependencias.**
- Mantené la estructura de carpetas existente.

## 📄 Licencia

MIT — ver [LICENSE](LICENSE) para más detalles.

---

Hecho con ❤️ por [Máximo Hahn](https://github.com/maxi-hahn).