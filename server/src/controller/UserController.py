# controllers/user_controller.py
from flask import jsonify
from controller.BaseController import BaseController
from service.UserService import UserService

class UserController(BaseController):

    def __init__(self, app):
        super().__init__(app)
        self.__service = UserService()
        self.register_routes()

    def register_routes(self):
        self.app.route('/user/hi/<username>')(self.hi)

    def hi(self, username):
        response = self.__service.hi(username)
        return jsonify(response)