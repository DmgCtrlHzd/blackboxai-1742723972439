from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .localai_client import send_chat_request, execute_task

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/chat")
async def chat(message: str):
    response = await send_chat_request(message)
    return {"response": response}

@app.post("/api/agi")
async def agi_task(prompt: str):
    result = await execute_task(prompt)
    return {"result": result}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)