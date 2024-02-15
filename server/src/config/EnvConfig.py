from pydantic import BaseSettings

class EnvConfig(BaseSettings):
    HOST: str = "localhost"
    PORT: int = 8000
