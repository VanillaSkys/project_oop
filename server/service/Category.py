class Category:
    def __init__(self, category_id, category_name) -> None:
        self.__category_id = category_id
        self.__category_name = category_name
        self.__cartoon_list = []

    def add_cartoon_list(self, cartoon):
        self.__cartoon_list.append(cartoon)
    
    def get_category_id(self):
        return self.__category_id

    def get_category_name(self):
        return self.__category_name

    def get_cartoon_list(self):
        return self.__cartoon_list