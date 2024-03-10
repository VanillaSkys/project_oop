from service.BuyCoin import BuyCoin
from service.BuyChapter import BuyChapter
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
        for author in self.__author:
            if author.get_username() == username:
                return 'Username already exists'
        data = self.__guest.register(username, password, self.__account_list)
        if isinstance(data, str):
            return "Username already exists"
        else:
            self.__account_list.append(data)
            return "Register successful"

    def register_author(self, author_name, username, password):
        for user in self.__account_list:
            if user.get_username() == username:
                return 'Username already exists'
        for author in self.__author:
            if author.get_username() == username:
                return "Username already exists"
            elif author.get_author_name() == author_name:
                return "Name already exists"
        author_instance = self.__admin.create_author_account(author_name, username, password)
        self.__author.append(author_instance)
        return "Register successful"
            
    def login(self, username, password):
        if username != 'admin':
            for user in self.__account_list:
                if user.get_username() == username:
                    data = user.login(username, password)
                    if isinstance(data, dict):
                        return data
                    return data
            for author in self.__author:
                if author.get_username() == username:
                    data = author.login(username, password)
                    if isinstance(data, dict):
                        return data
                    return data
            return {'Dont have account'}
        data = self.__admin.login(username, password)
        if isinstance(data, dict):
            return data
        return data

    def logout(self, username):
        for account in self.__account_list:
            if account.get_username() == username:
                data = account.logout(username)
                if isinstance(data, dict):
                    return data
                return data
            return 'Dont have account'

    def post_cartoon(self, name_cartoon, author, categories, file_cartoon, file_main, file_bg):
        for author_con in self.__author:
            if author_con.get_author_name() == author:
                response = self.__admin.post_cartoon(name_cartoon, author, categories, file_cartoon, file_main, file_bg)
                author_con.add_cartoon_list(response)
        #     author_list.append(author_con)
        # self.__author = author_list
        
        for category_con in self.__category:
            for category in categories:
                if category_con.get_category_name() == category:
                    category_con.add_cartoon_list(response)
        #     category_list.append(category_con)
        # self.__category = category_list
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
                response = self.__admin.post_chapter(str(len(cartoon.get_all_chapter()) + 1), name_cartoon, name_chapter, int(coin),files)
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
            # print({"image_background": cartoon.get_image_background()})
            response.append({"name": cartoon.get_name_cartoon(), "image_main": cartoon.get_image_main(), "image_background": cartoon.get_image_background()})
        return response
    
    def get_all_cartoon_category(self, name_category):
        for category in self.__category:
            if category.get_category_name() == name_category:
                return category.show_cartoon_list()
        return {'error', 'dont have'}
    
    def get_all_cartoon_author(self, name_author):
        for author in self.__author:
            if author.get_author_name() == name_author:
                return author.show_cartoon_list()
        return {'error', 'dont have'}

    def get_cartoon(self, name_cartoon):
        for cartoon in self.__cartoon:
            if cartoon.get_name_cartoon() == name_cartoon:
                return {"cartoon_id": cartoon.get_cartoon_id(), "name_cartoon": cartoon.get_name_cartoon(), "image_cartoon": cartoon.get_image_cartoon(), "image_main": cartoon.get_image_main(), "image_background": cartoon.get_image_background(), "author": cartoon.get_author(), "category": cartoon.get_category(), "all_chapter": cartoon.show_all_chapter()}
        return {"error": "name_cartoon"}
    
    def get_chapter(self, name_cartoon, number_chapter):
        for cartoon in self.__cartoon:
            if cartoon.get_name_cartoon() == name_cartoon:
                for chapter in cartoon.get_all_chapter():
                    if chapter.get_number_chapter() == number_chapter:
                        return {"chapter_id": chapter.get_chapter_id(), "number_chapter": chapter.get_number_chapter(), "name_chapter": chapter.get_name_chapter(), "cartoon_id": cartoon.get_cartoon_id(), "name_cartoon": cartoon.get_name_cartoon(), "image_chapter": chapter.get_image_chapter(), "coin": chapter.get_coin()}
        return {"error": "name_cartoon"}
    
    def get_user(self, username):
        for user in self.__account_list:
            if user.get_username() == username:
                return {"username": user.get_username(), "coin": user.get_coin(), "transaction_coin": user.show_transaction_coin(), "transaction_chapter": user.show_transaction_chapter()}
        return {'error': 'error'}
    
    def get_author(self, username):
        for author in self.__author:
            if author.get_username() == username:
                return {"username": author.get_username(), "author_name": author.get_author_name(), "cartoon_list": author.show_cartoon_list(), "transaction_author": author.show_transaction_author()}
        return {'error': 'error'}
    
    def buy_coin(self, username, total_coin, amount):
        for user in self.__account_list:
            if user.get_username() == username:
                buy_coin = BuyCoin()
                qr_image_buffer, transaction = buy_coin.buy_coin(total_coin, amount)
                user.add_all_transaction_coin(transaction)
                user.add_coin(total_coin)
                return qr_image_buffer
        return {'error': "error"}   
         
    def buy_chapter(self, username, cartoon_id, chapter_id):
        for user in self.__account_list:
            if user.get_username() == username and not(any(chapter_id in t.values() for t in user.show_transaction_chapter())):
                for cartoon in self.__cartoon:
                    if str(cartoon.get_cartoon_id()) == cartoon_id:
                        for chapter in cartoon.get_all_chapter():
                            coin = chapter.get_coin()
                            if (str(chapter.get_chapter_id()) == chapter_id):
                                if user.get_coin() >= coin:
                                    buy_chapter = BuyChapter()
                                    transaction, transaction_author = buy_chapter.buy_chapter(chapter, cartoon.get_name_cartoon())
                                    user.sub_coin(coin)
                                    user.add_all_transaction_chapter(transaction)
                                    for author in self.__author:
                                        if cartoon.get_author() == author.get_author_name():
                                            author.add_transaction_author(transaction_author)
                                            return 'success'
                                return {'error': 'coin'}
        return {'error': "login"}        
