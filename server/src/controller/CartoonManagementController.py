from src.service.Guest import Guest
class CartoonManagementController:
    def __init__(self, guest) -> None:
        self.__account_list = []
        self.__cartoon = []
        self.__category = []
        self.__author = []
        self.__guest = guest
    
    async def register(self, username, password):
        data = await self.__guest.register(username, password, self.__account_list)
        if isinstance(data, str):
            return "Username already exists"
        else:
            self.__account_list.append(data)
            return True

    async def login(self, username, password):
        for account in self.__account_list:
            data = account.login(username, password)
            if isinstance(data, dict):
                return data
            return data
        

    def logout(self, username):
        for account in self.__account_list:
            data = account.logout(username)
            if isinstance(data, dict):
                return data
            return data

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