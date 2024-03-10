import requests
from data import author

class Author:
    def __init__(self, url) -> None:
        self.__url = url
        self.__data = author.athor_adta
    
    def add(self):
        for data in self.__data:
            requests.post(self.__url, json = data)
            print(f"Register Author => {data['author_name']} success")
