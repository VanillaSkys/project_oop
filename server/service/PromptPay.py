from io import BytesIO
import os
from PIL import Image
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
                img_file = open(os.path.join('public', 'qrcode', img_path), 'rb')
                img = Image.open(img_file)
                qr_image_buffer = BytesIO()
                img.save(qr_image_buffer, format='PNG')
                qr_image_buffer.seek(0)
                img_file.close()
                return qr_image_buffer