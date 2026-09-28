from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base


# ============================================================
# CONFIGURACIÓN DE BASE DE DATOS
# ============================================================
# Configuración de SQLAlchemy.
#
# Por defecto usa SQLite. Cambiar SQLALCHEMY_DATABASE_URL
# para usar PostgreSQL, MySQL, etc.
#
# Uso:
#     from app.core.database import get_db, Base
#
#     def endpoint(db: Session = Depends(get_db)):
#         ...
# ============================================================

SQLALCHEMY_DATABASE_URL = "sqlite:///./app.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False},  # Solo para SQLite
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    """
    Dependency de FastAPI que provee una sesión de base de datos.

    Uso:
        @app.get("/items")
        def list_items(db: Session = Depends(get_db)):
            ...
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()