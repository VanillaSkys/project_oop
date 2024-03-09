from uuid import uuid4

class Chapter:
    def __init__(self, number_chapter, name_chapter, coin = 0) -> None:
        self.__chapter_id = str(uuid4())
        self.__number_chapter = number_chapter
        self.__name_chapter = name_chapter
        self.__coin = coin
        self.__image_chapter = []

    def add_image_chapter(self, image):
        self.__image_chapter.append(image)

    def get_chapter_id(self):
        return self.__chapter_id
    
    def get_number_chapter(self):
        return self.__number_chapter
    
    def get_name_chapter(self):
        return self.__name_chapter
    
    def get_coin(self):
        return self.__coin
    
    def get_image_chapter(self):
        return self.__image_chapter
    
        
        