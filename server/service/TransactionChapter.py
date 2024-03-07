from uuid import uuid4
from datetime import datetime

class TransactionChapter:
    def __init__(self, chapter_id, cartoon_name, chapter_number, chapter_coin) -> None:
        self.__transaction_chapter_id = uuid4()
        self.__chapter_id = chapter_id
        self.__time = datetime.now()
        self.__cartoon_name = cartoon_name
        self.__chapter_number = chapter_number
        self.__chapter_coin = chapter_coin
        
    def get_transaction_chapter_id(self):
        return self.__transaction_chapter_id

    def get_chapter_id(self):
        return self.__chapter_id

    def set_chapter_id(self, chapter_id):
        self.__chapter_id = chapter_id

    def get_time(self):
        return self.__time

    def get_cartoon_name(self):
        return self.__cartoon_name

    def set_cartoon_name(self, cartoon_name):
        self.__cartoon_name = cartoon_name

    def get_chapter_number(self):
        return self.__chapter_number

    def set_chapter_number(self, chapter_number):
        self.__chapter_number = chapter_number

    def get_chapter_coin(self):
        return self.__chapter_coin

    def set_chapter_coin(self, chapter_coin):
        self.__chapter_coin = chapter_coin