# controllers/base_controller.py
from abc import ABC, abstractmethod

class BaseController(ABC):
    def __init__(self, app):
        self.app = app

    @abstractmethod
    def register_routes(self):
        pass
