from fastapi import APIRouter
from src.controller.UserController import UserController
class MainController:
    def __init__(self):
        self.router = APIRouter()
        self.register_controllers()

    def register_controllers(self):
        self.router.include_router(UserController().router, prefix="/user")