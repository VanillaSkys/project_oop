# controllers/main_controller.py
from controller.UserController import UserController
from controller.BaseController import BaseController
from controller.MangaController import MangaController

class MainController(BaseController):
    def __init__(self, app):
        super().__init__(app)
        self.userController = UserController(app)
        self.MangaController = MangaController(app)
        self.register_routes()

    def register_routes(self):
        pass
