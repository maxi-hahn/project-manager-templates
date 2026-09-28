from fastapi import FastAPI

from app.core.config import settings


# ============================================================
# APLICACIÓN FASTAPI
# ============================================================
# Punto de entrada de la API.
#
# Swagger UI:  http://localhost:8000/docs
# ReDoc:       http://localhost:8000/redoc
# ============================================================

app = FastAPI(
    title=settings.PROJECT_NAME,
    description=settings.DESCRIPTION,
    version="0.1.0",
)


# ============================================================
# ENDPOINT DE EJEMPLO
# ============================================================
# Endpoint básico para verificar que la API funciona.
# ============================================================

@app.get("/")
def root():
    return {
        "message": f"{settings.PROJECT_NAME} API",
        "description": settings.DESCRIPTION,
    }