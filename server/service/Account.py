

class Account:
    def __init__(self, username = None, password = None, status = False) -> None:
        self.__username = username
        self.__password = password
        self.__status = status

    def get_username(self):
        return self.__username
    
    def login(self, username, password):
        if self.__username == username and self.__password == password and username != 'admin':
            self.__status = True
            return {"user": username}
        elif self.__username == username and self.__password != password: 
            return "invalid username or password"
        else:
            return "Don't have user"
        
    def logout(self, username):
        if self.__username == username:
            self.__status = False
            return "Logout success"
        return None
        