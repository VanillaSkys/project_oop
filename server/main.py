from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import json
from src.controller.CartoonManagementController import CartoonManagementController
# import sys
# sys.path.append('/server/src')
from src.service.Guest import Guest
app = FastAPI()
cartoon_controller = CartoonManagementController(Guest())
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.mount("/public", StaticFiles(directory="public"), name="public")
# Controller
@app.get("/")
async def root():
    return {"message": "HELLO"}

# @app.get("/logout")
# async def delete_cookie_user():


@app.post('/register')
async def add_register(username, password):
    response = await cartoon_controller.register(username, password)
    if response == True :
        return {"message": "Register successful"}
    else:
        raise HTTPException(status_code=401, detail=response)
    
@app.post('/login')
async def add_login(username, password):
    response = await cartoon_controller.login(username, password)
    if isinstance(response, dict)  :
        return {"message": response}
    else:
        raise HTTPException(status_code=401, detail=response)
@app.post('/logout')
async def logout_user(username):
    response = await cartoon_controller.logout(username)
    if response == "Logout success":
        return {"message": response}
    else:
        raise HTTPException(status_code=401, detail="Can't logout")
    
def create_instance():
    pass
create_instance()

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, log_level="info")
