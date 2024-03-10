import os
import requests
import re
from data.Cartoon import cartoon_data

class Cartoon:
    def __init__(self, url) -> None:
        self.__url = url
        self.__data = cartoon_data
    def add(self):
        # for cartoon_dir in os.listdir('cartoon'):
            # for img_dir in os.listdir(os.path.join('cartoon', cartoon_dir)):
        for data in self.__data:
            image_cartoon = open(os.path.join(data['image_cartoon'].split('/')[-3], data['image_cartoon'].split('/')[-2], data['image_cartoon'].split('/')[-1]), "rb")
            image_background = open(os.path.join(data['image_bg'].split('/')[-3], data['image_bg'].split('/')[-2], data['image_bg'].split('/')[-1]), "rb")
            image_main = open(os.path.join(data['image_main'].split('/')[-3], data['image_main'].split('/')[-2], data['image_main'].split('/')[-1]), "rb")
            requests.post(self.__url, 
            files={
                "image_cartoon": image_cartoon,
                "image_background": image_background,
                "image_main": image_main,
            } , 
            data= {
                "name_cartoon": data['name'],
                "category": data['category'],
                "author": data['author']
            }
            )
            print("Post Cartoon =>", data['name'])