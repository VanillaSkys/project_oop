from handler.UserHandler import UserHandler
class UserService:
    def __init__(self):
        self.__user = UserHandler()

    def hi(self, username):
        if(username == "None"):
            return self.__user.usernameIsNull()
        return "hi"