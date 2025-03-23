import os

class Config:
    LOCALAI_URL = os.getenv("LOCALAI_URL", "http://localhost:8080")
    LOGGING_LEVEL = os.getenv("LOGGING_LEVEL", "INFO")