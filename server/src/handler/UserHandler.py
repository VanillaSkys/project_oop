from handler.BaseHandler import BaseHandler
class UserHandler(BaseHandler):
    def __init__(self, message = ""):
        super().__init__("user." + message)

    @staticmethod
    def usernameIsNull():
        return UserHandler().to_dict("username.null")