import requests
from data_cartoon.author import author_data

class Author:
    def __init__(self, url) -> None:
        self.__url = url
        self.__data = author_data
    
    def add(self):
        for data in self.__data:
            requests.post(self.__url, json = data)
            print(f"Register Author => {data['author_name']} success")
