from typing import Generic, TypeVar

from pydantic import BaseModel


# ============================================================
# PAGINACIÓN
# ============================================================
# Utilidades para paginar resultados en endpoints REST.
#
# Uso típico en un endpoint:
#
#     @router.get("/items")
#     def list_items(page: int = 1, page_size: int = 20):
#         items = obtener_todos_los_items()
#         return paginate(items, page, page_size)
# ============================================================

T = TypeVar("T")


class Page(BaseModel, Generic[T]):
    """
    Esquema de respuesta paginada.

    Atributos:
        items:      Lista de elementos de la página actual.
        total:      Cantidad total de elementos.
        page:       Número de página actual (empieza en 1).
        page_size:  Cantidad de elementos por página.
        pages:      Cantidad total de páginas.
    """

    items: list[T]
    total: int
    page: int
    page_size: int
    pages: int


def paginate(
    items: list[T],
    page: int = 1,
    page_size: int = 20,
) -> Page[T]:
    """
    Pagina una lista de elementos.

    Args:
        items:      Lista completa de elementos.
        page:       Número de página (empieza en 1).
        page_size:  Cantidad de elementos por página.

    Returns:
        Un objeto Page con los elementos de la página solicitada.
    """

    if page < 1:
        page = 1

    if page_size < 1:
        page_size = 20

    total = len(items)
    pages = (total + page_size - 1) // page_size

    start = (page - 1) * page_size
    end = start + page_size

    return Page(
        items=items[start:end],
        total=total,
        page=page,
        page_size=page_size,
        pages=pages,
    )