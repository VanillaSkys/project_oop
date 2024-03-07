from service.TransactionCoin import TransactionCoin
from service.PromptPay import PromptPay
from promptpay import qrcode as qr_code
import qrcode
from io import BytesIO

class BuyCoin:
    def __init__(self) -> None:
        pass
    
    def buy_coin(self, total_coin, amount):
        transaction = TransactionCoin(total_coin, amount)
        promt_pay = PromptPay("0632483026")
        qr_image_buffer = promt_pay.generate_qrcode(amount)
        return qr_image_buffer, transaction
