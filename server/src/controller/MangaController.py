
from controller.BaseController import BaseController

class MangaController(BaseController):

    def __init__(self, app):
        super().__init__(app)
        self.register_routes()
        
    def register_routes(self):
        self.app.route('/manga/get')(self.get)
        self.app.route('/manga/hello')(self.hello)

    def get(self):
        return "get"
    def hello(self):
        return "Hello"