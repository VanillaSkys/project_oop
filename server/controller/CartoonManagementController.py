
class CartoonManagementController:
    def __init__(self, guest, admin) -> None:
        self.__account_list = []
        self.__cartoon = []
        self.__category = []
        self.__author = []
        self.__guest = guest
        self.__admin = admin
    
    def register(self, username, password):
        data = self.__guest.register(username, password, self.__account_list)
        if isinstance(data, str):
            return "Username already exists"
        else:
            self.__account_list.append(data)
            return "Register successful"

    def login(self, username, password):
        if username != 'admin':
            for account in self.__account_list:
                data = account.login(username, password)
                if isinstance(data, dict):
                    return data
                return data
        data = self.__admin.login(username, password)
        if isinstance(data, dict):
            return data
        return data

    def logout(self, username):
        for account in self.__account_list:
            data = account.logout(username)
            if isinstance(data, dict):
                return data
            return data

    def post_cartoon(self, name_cartoon, author, category, file):
        response = self.__admin.post_cartoon(name_cartoon, author, category, file)
        if isinstance(response, dict):
            return response
        else:
            self.__cartoon.append(response)
            return "Success"

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

    def get_all_cartoon(self):
        response = []
        for cartoon in self.__cartoon:
            response.append({"name": cartoon.get_name_cartoon(), "image": f"static/cartoon/{cartoon.get_image_cartoon()}"})
        return response
