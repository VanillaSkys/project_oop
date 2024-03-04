from werkzeug.utils import secure_filename
import os
from flask_uuid import uuid
from service.Account import Account
from service.Cartoon import Cartoon

class Admin(Account):
    def __init__(self, username='admin', password='admin', status=False) -> None:
        super().__init__(username, password, status)

    def login(self, username, password):
        if username == self.__username and password == self.__password:
            return {'user': username}
        elif self.__username == username and self.__password != password: 
            return "invalid username or password"
        return 'Dont have user'
    
    def post_cartoon(self, name_cartoon, author, category, file):
        if file.filename == '':
            return {'error': 'No selected file'}

        if file:
            mime = file.filename.split('.')[-1].lower()
            filename = secure_filename('main.'+mime)
            path = os.path.join('public', 'cartoon', name_cartoon)
            os.mkdir(path) 
            file.save(os.path.join(path, filename))
            path_file = name_cartoon + "/" + filename
            cartoon = Cartoon(uuid.uuid4(), name_cartoon, path_file, author)
            cartoon.add_category(category)
            return cartoon
        else:
            return {'error': 'Failed to upload image'}