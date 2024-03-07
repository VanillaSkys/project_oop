class Author:
    def __init__(self, author_id, author_name) -> None:
        self.__author_id = author_id
        self.__author_name = author_name
        self.__cartoon_list = []
        self.__transaction_author = []
        
    def get_author_id(self):
        return self.__author_id
    
    def get_author_name(self):
        return self.__author_name
    
    def get_cartoon_list(self):
        return self.__cartoon_list
    
    def add_cartoon_list(self, cartoon):
        self.__cartoon_list.append(cartoon)
    
    def get_transaction_author(self):
        return self.__transaction_author