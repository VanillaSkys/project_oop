from io import BytesIO
import os
# from PIL import Image
import base64
class PromptPay:
    def __init__(self, number) -> None:
        self.__number = number
        
    def get_number(self):
        return self.__number
    
    def set_number(self, number):
        self.__number = number
        
    def generate_qrcode(self, amount):
        imgs_path = os.path.join('public', 'qrcode')
        imgs_path = os.listdir(imgs_path)
        for img_path in imgs_path:
            mime = img_path.split('.')[-1].lower()
            if img_path == f'{amount}.{mime}':
                qrcode_path = os.path.join('public', 'qrcode', f'{img_path}')
                encoded_image = base64.b64encode(open(qrcode_path, 'rb').read()).decode('utf-8')
                return encoded_image