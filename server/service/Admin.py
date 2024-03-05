from werkzeug.utils import secure_filename
import os
from flask_uuid import uuid
from service.Account import Account
from service.Cartoon import Cartoon
from service.Chapter import Chapter

class Admin(Account):
    def __init__(self, username='admin', password='admin', status=False) -> None:
        super().__init__(username, password, status)

    def login(self, username, password):
        if username == self.__username and password == self.__password:
            return {'user': username}
        elif self.__username == username and self.__password != password: 
            return "invalid username or password"
        return 'Dont have user'
    
    def post_cartoon(self, name_cartoon, author, category, file_cartoon, file_main, file_bg):
        if file_cartoon.filename == '':
            return {'error': 'No selected file'}

        if file_cartoon:
            mime_cartoon = file_cartoon.filename.split('.')[-1].lower()
            filename_cartoon = secure_filename('cartoon.'+mime_cartoon)

            mime_main = file_main.filename.split('.')[-1].lower()
            filename_main = secure_filename('main.'+mime_main)

            mime_bg = file_bg.filename.split('.')[-1].lower()
            filename_bg = secure_filename('background.'+mime_bg)

            path = os.path.join('public', 'cartoon', name_cartoon)
            if not os.path.exists(path):
                os.makedirs(path)
            
            file_cartoon.save(os.path.join(path, filename_cartoon))
            file_main.save(os.path.join(path, filename_main))
            file_bg.save(os.path.join(path, filename_bg))
            path_file_cartoon = f'cartoon/{name_cartoon}/{filename_cartoon}'
            path_file_main = f'cartoon/{name_cartoon}/{filename_main}'
            path_file_bg = f'cartoon/{name_cartoon}/{filename_bg}'
            cartoon = Cartoon(uuid.uuid4(), name_cartoon, path_file_cartoon, path_file_main, path_file_bg, author)
            cartoon.set_category(category)
            return cartoon
        else:
            return {'error': 'Failed to upload image'}
        
    def post_chapter(self, number_chapter, name_cartoon, name_chapter, coin, files):
        chapter = Chapter(uuid.uuid4(), number_chapter, name_chapter, coin)
        for index, file in enumerate(files):
            if file:
                path = os.path.join('public', 'cartoon', name_cartoon, 'chapter', number_chapter)
                if not os.path.exists(path):
                    os.makedirs(path)
                mime = file.filename.split('.')[-1].lower()
                filename = secure_filename(f'{index}.{mime}')
                file.save(os.path.join('public', 'cartoon', name_cartoon, 'chapter', number_chapter, filename))

                path_filename = f'cartoon/{name_cartoon}/chapter/{number_chapter}/{filename}'
                chapter.add_image_chapter(path_filename)
        return chapter