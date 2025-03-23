import httpx
import os

LOCALAI_URL = os.getenv("LOCALAI_URL", "http://localhost:8080")

async def send_chat_request(message: str):
    async with httpx.AsyncClient() as client:
        response = await client.post(f"{LOCALAI_URL}/chat", json={"message": message})
        response.raise_for_status()
        return response.json()

async def execute_task(prompt: str):
    async with httpx.AsyncClient() as client:
        response = await client.post(f"{LOCALAI_URL}/execute", json={"prompt": prompt})
        response.raise_for_status()
        return response.json()