from pydantic_settings import BaseSettings, SettingsConfigDict


# ============================================================
# CONFIGURACIÓN
# ============================================================
# Carga las variables de entorno desde el archivo .env.
#
# Uso:
#     from app.core.config import settings
#     print(settings.PROJECT_NAME)
# ============================================================

class Settings(BaseSettings):

    PROJECT_NAME: str = "{{PROJECT_NAME}}"
    DESCRIPTION: str = "{{DESCRIPTION}}"

    HOST: str = "0.0.0.0"
    PORT: int = 8000
    RELOAD: bool = True

    DEBUG: bool = True

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )


settings = Settings()