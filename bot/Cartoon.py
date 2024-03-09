import os
import requests
import re
class Cartoon:
    def __init__(self, url) -> None:
        self.__url = url
        self.__data = [
            {}
        ]
    def add(self):
        for cartoon_dir in os.listdir('cartoon'):
            # for img_dir in os.listdir(os.path.join('cartoon', cartoon_dir)):
            image_cartoon = open(os.path.join('cartoon', cartoon_dir, 'cartoon.png'), "rb")
            image_background = open(os.path.join('cartoon', cartoon_dir, 'bg.png'), "rb")
            image_main = open(os.path.join('cartoon', cartoon_dir, 'main.png'), "rb")
            requests.post(self.__url, 
            files={
                "image_cartoon": image_cartoon,
                "image_background": image_background,
                "image_main": image_main,
            } , 
            data= {
                "name_cartoon": "solo",
                "category": ['Action'],
                "author": "string"
            }
            )