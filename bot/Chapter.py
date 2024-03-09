import os
import requests
import re
from data.chapter import chapter_data

class Chapter:
    def __init__(self, url) -> None:
        self.__url = url
        self.__data = chapter_data
    def add(self):
        # for cartoon_dir in os.listdir('cartoon'):
            # for img_dir in os.listdir(os.path.join('cartoon', cartoon_dir)):
        for data in self.__data:
            # path = os.listdir(data['files'].split('/')[-4], data['files'].split('/')[-3], data['files'].split('/')[-2])
            print(data['files'].split('/')[-4], data['files'].split('/')[-3], data['files'].split('/')[-2])
            # image_cartoon = open(os.path.join(data['image_cartoon'].split('/')[-3], data['image_cartoon'].split('/')[-2], data['image_cartoon'].split('/')[-1]), "rb")
            # image_background = open(os.path.join(data['image_bg'].split('/')[-3], data['image_bg'].split('/')[-2], data['image_bg'].split('/')[-1]), "rb")
            # image_main = open(os.path.join(data['image_main'].split('/')[-3], data['image_main'].split('/')[-2], data['image_main'].split('/')[-1]), "rb")
            # requests.post(self.__url, 
            # files={
            #     "image_cartoon": image_cartoon,
            #     "image_background": image_background,
            #     "image_main": image_main,
            # } , 
            # data= {
            #     "name_cartoon": data['name'],
            #     "category": data['category'],
            #     "author": data['author']
            # }
            # )
            # print("Post Cartoon =>", data['name'])