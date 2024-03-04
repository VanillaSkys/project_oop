class Cartoon:
    def __init__(self, id_cartoon, name_cartoon, image_cartoon, image_main, image_background, author) -> None:
        self.__id_cartoon = id_cartoon
        self.__name_cartoon = name_cartoon
        self.__image_cartoon = image_cartoon
        self.__image_main = image_main
        self.__image_background = image_background
        self.__author = author
        self.__category = []
        self.__all_chapter = []
    
    def add_category(self, category):
        self.__category.append(category)

    def get_id_cartoon(self):
        return self.__id_cartoon
    
    def get_name_cartoon(self):
        return self.__name_cartoon
    
    def get_image_cartoon(self):
        return self.__image_cartoon
    
    def get_image_main(self):
        return self.__image_main
    
    def get_image_background(self):
        return self.__image_background

    def get_author(self):
        return self.__author
    
    def get_category(self):
        return self.__category
    
    def get_all_chapter(self):
        return self.__all_chapter
