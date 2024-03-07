
class CartoonManagementController:
    def __init__(self, guest, admin) -> None:
        self.__account_list = []
        self.__cartoon = []
        self.__category = []
        self.__author = []
        self.__guest = guest
        self.__admin = admin
    
    def map_category(self):
        res = []
        for category in self.__category:
            res.append({"id": category.get_category_id(), "name":category.get_category_name(), "cartoon": [cartoon.get_name_cartoon() for cartoon in category.get_cartoon_list()]})
        return res

    def set_category(self, category):
        self.__category = category

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

    def post_cartoon(self, name_cartoon, author, categories, file_cartoon, file_main, file_bg):
        response = self.__admin.post_cartoon(name_cartoon, author, categories, file_cartoon, file_main, file_bg)
        category_list = []
        for category_con in self.__category:
            for category in categories:
                if category_con.get_category_name() == category:
                    category_con.add_cartoon_list(response)
            category_list.append(category_con)
        self.__category = category_list
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

    def post_chapter(self, name_cartoon, name_chapter, coin, files):
        for cartoon in self.__cartoon:
            if cartoon.get_name_cartoon() == name_cartoon:
                response = self.__admin.post_chapter(str(len(cartoon.get_all_chapter()) + 1), name_cartoon, name_chapter, coin,files)
                cartoon.add_all_chapter(response)
                return "Success"

    def put_chapter(self, chapter_id, updated_data):
        # Implementation of updating an existing chapter
        pass

    def delete_chapter(self, chapter_id):
        # Implementation of deleting a chapter
        pass

    def show_transaction(self):
        # Implementation of show a transaction
        pass

    # def get_all_cartoon(self, name_category):
    #     response = []
    #     if name_category == None:
    #         for cartoon in self.__cartoon:
    #             response.append({"name": cartoon.get_name_cartoon(), "image_main": cartoon.get_image_main()})
    #     else:
    #         for category in self.__category:
    #             if category.get_category_name() == name_category:
    #                 print(category.get_cartoon_list())
    #                 for cartoon in category.get_cartoon_list():
    #                     response.append({"name": cartoon.get_name_cartoon(), "image_main": cartoon.get_image_main()})
    #     return response
    def get_all_cartoon(self):
        response = []
        for cartoon in self.__cartoon:
            response.append({"name": cartoon.get_name_cartoon(), "image_main": cartoon.get_image_main()})
        return response
    
    def get_all_cartoon_category(self, name_category):
        response = []
        for category in self.__category:
            if category.get_category_name() == name_category:
                print(category.get_cartoon_list())
                for cartoon in category.get_cartoon_list():
                    response.append({"name": cartoon.get_name_cartoon(), "image_main": cartoon.get_image_main()})
        return response

    def get_cartoon(self, name_cartoon):
        all = []
        for cartoon in self.__cartoon:
            if cartoon.get_name_cartoon() == name_cartoon:
                for chapter in cartoon.get_all_chapter():
                    all.append({"id_cartoon": chapter.get_id_cartoon(), "number_chapter": chapter.get_number_chapter(), "name_chapter": chapter.get_name_chapter(), "coin": chapter.get_coin(), "image_chapter": chapter.get_image_chapter()})
                return {"id_cartoon": cartoon.get_id_cartoon(), "name_cartoon": cartoon.get_name_cartoon(), "image_cartoon": cartoon.get_image_cartoon(), "image_main": cartoon.get_image_main(), "image_background": cartoon.get_image_background(), "author": cartoon.get_author(), "category": cartoon.get_category(), "all_chapter": all}
        return {"error": "name_cartoon"}
    def get_chapter(self, name_cartoon, number_chapter):
        for cartoon in self.__cartoon:
            if cartoon.get_name_cartoon() == name_cartoon:
                for chapter in cartoon.get_all_chapter():
                    if chapter.get_number_chapter() == number_chapter:
                        return {"id_cartoon": cartoon.get_id_cartoon(), "name_cartoon": cartoon.get_name_cartoon(), "image_chapter": chapter.get_image_chapter()}
        return {"error": "name_cartoon"}
