# {{PROJECT_NAME}}

{{DESCRIPTION}}

---

## Requisitos

- Python 3.12 o superior
- pip

---

## Instalación

1. Crear el entorno virtual:
python -m venv .venv

text

2. Activar el entorno virtual:

**Windows:**
.venv\Scripts\activate

text

**Linux/Mac:**
source .venv/bin/activate

text

3. Instalar las dependencias:
pip install -r requirements.txt

text

4. Copiar el archivo de configuración:
copy .env.example .env

text

---

## Ejecución

Levantar el servidor:
python run.py

text

La API estará disponible en:

- API:     http://localhost:8000
- Swagger: http://localhost:8000/docs
- ReDoc:   http://localhost:8000/redoc

---

## Estructura del proyecto
.
├── app/
│ ├── main.py # Aplicación FastAPI
│ ├── core/
│ │ └── config.py # Configuración desde .env
│ ├── models/ # Modelos Pydantic
│ ├── routers/ # Endpoints organizados
│ └── services/ # Lógica de negocio
├── tests/ # Tests
├── run.py # Punto de entrada
└── requirements.txt # Dependencias

text

---

## Tests
pytest