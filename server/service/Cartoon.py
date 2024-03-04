class Cartoon:
    def __init__(self, id_cartoon, name_cartoon, author) -> None:
        self.__id_cartoon = id_cartoon
        self.__name_cartoon = name_cartoon
        self.__author = author
        self.__category = []
        self.__all_chapter = []
    
    def set_category(self, category):
        self.__category = category

    def get_name_cartoon(self):
        return self.__name_cartoon