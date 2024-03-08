import qrcode
from io import BytesIO

class PromptPay:
    def __init__(self, number) -> None:
        self.__number = number
        
    def get_number(self):
        return self.__number
    
    def set_number(self, number):
        self.__number = number
        
    def generate_qrcode(self, amount):

        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )

        qr.add_data(amount)
        qr.make(fit=True)
        img = qr.make_image(fill_color="black", back_color="white")
        qr_image_buffer = BytesIO()
        img.save(qr_image_buffer)
        qr_image_buffer.seek(0)
        return qr_image_buffer