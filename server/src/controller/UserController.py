from fastapi import APIRouter
from src.request.UserRequest import LoginRequest
from src.response.UserResponse import LoginResponse
class UserController:
    def __init__(self):
        self.router = APIRouter()

        @self.router.get("")
        async def get_user() -> list:
            return [{"username":"b","password": "test"},{"username":"a","password": "test"}]
        
        @self.router.post("")
        async def create_user(body:LoginRequest) -> LoginResponse:
            return body