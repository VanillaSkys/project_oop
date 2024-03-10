from uuid import uuid4

class Category:
    def __init__(self, category_name) -> None:
        self.__category_id = str(uuid4())
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
    
    def show_cartoon_list(self): 
        return [{"name": cartoon.get_name_cartoon(), "image_main": cartoon.get_image_main(), "image_background": cartoon.get_image_background()} for cartoon in self.__cartoon_list]