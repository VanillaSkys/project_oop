from uuid import uuid4
from service.Account import Account
class Author(Account):
    def __init__(self, author_name, username, password, status=False) -> None:
        super().__init__(username, password, status)
        self.__author_id = str(uuid4())
        self.__author_name = author_name
        self.__username = username
        self.__password = password
        self.__cartoon_list = []
        self.__transaction_author = []
        
    def get_author_id(self):
        return self.__author_id
    
    def get_author_name(self):
        return self.__author_name
    
    def get_username(self):
        return self.__username
    
    def get_password(self):
        return self.__password
    
    def get_cartoon_list(self):
        return self.__cartoon_list
    
    def add_cartoon_list(self, cartoon):
        self.__cartoon_list.append(cartoon)
    
    def get_transaction_author(self):
        return self.__transaction_author
    
    def add_transaction_author(self, transaction):
        self.__transaction_author.append(transaction)
        
    def show_cartoon_list(self):
        return [{"name": cartoon.get_name_cartoon(), "image_main": cartoon.get_image_main()} for cartoon in self.__cartoon_list ]
        
    def show_transaction_author(self):
        return [{"transaction_chapter_id": transaction.get_transaction_chapter_id(), "chapter_id": transaction.get_chapter_id(), "time": transaction.get_time(), "cartoon_name": transaction.get_cartoon_name(), "chapter_number": transaction.get_chapter_number(), "total_coin": transaction.get_total_coin()} for transaction in self.__transaction_author]
    