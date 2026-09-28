import uvicorn

from app.core.config import settings


# ============================================================
# PUNTO DE ENTRADA
# ============================================================
# Levanta el servidor Uvicorn con la configuración cargada
# desde el archivo .env.
#
# Uso:
#     python run.py
# ============================================================

if __name__ == "__main__":
    uvicorn.run(
        "app.main:app",
        host=settings.HOST,
        port=settings.PORT,
        reload=settings.RELOAD,
    )