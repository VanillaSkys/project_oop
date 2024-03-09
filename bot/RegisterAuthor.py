import requests

class RegisterAuthor:
    def __init__(self, url) -> None:
        self.__url = url
        self.__data = [
            {
                "author_name": "vanilla",
                "username": "fill",
                "password": "fill"
            },
            {
                "author_name": "boaty",
                "username": "boat",
                "password": "boat"
            },
        ]
    
    def add(self):
        for data in self.__data:
            requests.post(self.__url, json = data)
            print(f"Register Author => {data['author_name']} success")
        return "Register Author => success"