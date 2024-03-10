import os
import requests
from data_cartoon.chapter import chapter_data

class Chapter:
    def __init__(self, url) -> None:
        self.__url = url
        self.__data = chapter_data
    def add(self):
        for data in self.__data:
            chapters = os.listdir(os.path.join(data['files'].split('/')[-4], data['files'].split('/')[-3], data['files'].split('/')[-2], data['files'].split('/')[-1]))
            files = []
            for number, chapter in enumerate(chapters):
                files.append(('files[]', open(os.path.join(data['files'].split('/')[-4], data['files'].split('/')[-3], data['files'].split('/')[-2], data['files'].split('/')[-1], f"{number}.{chapter.split('.')[-1].lower()}"), "rb")))
            requests.post(self.__url, 
            files = files,
            data = {
                "name_cartoon": data['name_cartoon'],
                "name_chapter" : data['name_chapter'],   
                "coin": data['coin']
            }
            )
            print("Post Chapter =>", data['name_cartoon'] ,"=>", data['name_chapter'])