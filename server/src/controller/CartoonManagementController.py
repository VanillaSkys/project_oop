from src.service.Guest import Guest

class CartoonManagementController:
    def __init__(self) -> None:
        self.__account = []
        self.__cartoon = []
        self.__category = []
        self.__author = []

    async def register(self, username, password):
        guest = Guest()
        data = await guest.register(username, password, self.__account)
        if type(data) == dict:
            self.__account.append(data)
            return True
        else:
            return "Username already exists"

    def login(self, username, password):
        # Implementation of user login
        pass

    def logout(self):
        # Implementation of user logout
        pass

    def post_cartoon(self, cartoon_data):
        # Implementation of posting a new cartoon
        pass

    def put_cartoon(self, cartoon_id, updated_data):
        # Implementation of updating an existing cartoon
        pass

    def delete_cartoon(self, cartoon_id):
        # Implementation of deleting a cartoon
        pass

    def post_chapter(self, cartoon_id, chapter_data):
        # Implementation of posting a new chapter for a cartoon
        pass

    def put_chapter(self, chapter_id, updated_data):
        # Implementation of updating an existing chapter
        pass

    def delete_chapter(self, chapter_id):
        # Implementation of deleting a chapter
        pass

    def show_transaction(self):
        # Implementation of show a transaction
        pass