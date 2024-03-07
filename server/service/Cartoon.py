from uuid import uuid4

class Cartoon:
    def __init__(self, name_cartoon, image_cartoon, image_main, image_background, author) -> None:
        self.__cartoon_id = str(uuid4())
        self.__name_cartoon = name_cartoon
        self.__image_cartoon = image_cartoon
        self.__image_main = image_main
        self.__image_background = image_background
        self.__author = author
        self.__category = []
        self.__all_chapter = []
    
    def set_category(self, category):
        self.__category = category

    def get_cartoon_id(self):
        return self.__cartoon_id
    
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
    
    def add_all_chapter(self, chapter):
        self.__all_chapter.append(chapter)
