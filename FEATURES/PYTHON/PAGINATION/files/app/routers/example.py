from fastapi import APIRouter, Query

from app.core.pagination import paginate


# ============================================================
# ENDPOINT DE EJEMPLO - PAGINACIÓN
# ============================================================
# Este endpoint muestra cómo usar la utilidad de paginación.
#
# Para activarlo, importalo en app/main.py:
#
#     from app.routers import example
#     app.include_router(example.router, prefix="/example")
# ============================================================

router = APIRouter(tags=["example"])


# Datos de ejemplo
_ITEMS = [{"id": i, "name": f"Item {i}"} for i in range(1, 101)]


@router.get("/items")
def list_items(
    page: int = Query(1, ge=1, description="Número de página"),
    page_size: int = Query(20, ge=1, le=100, description="Elementos por página"),
):
    """
    Devuelve una lista paginada de items de ejemplo.
    """
    return paginate(_ITEMS, page=page, page_size=page_size)