import requests
from data.author import athor_adta
class RegisterAuthor:
    def __init__(self, url) -> None:
        self.__url = url
        self.__data = athor_adta
    
    def add(self):
        for data in self.__data:
            requests.post(self.__url, json = data)
            print(f"Register Author => {data['author_name']} success")
        return "Register Author => success"
