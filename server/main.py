from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.controller.MainController import MainController

app = FastAPI()

# Set up CORS
# origins = [
#     "http://localhost"
# ]

app.add_middleware(CORSMiddleware)
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["GET", "POST", "PUT", "DELETE"],
#     allow_headers=["*"],
# )

main_controller = MainController()
app.include_router(main_controller.router)