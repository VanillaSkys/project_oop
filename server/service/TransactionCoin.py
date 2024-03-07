from datetime import datetime
from uuid import uuid4

class TransactionCoin:
    def __init__(self, total_coin = 0, amount = 0.00) -> None:
        self.__transaction_coin_id = uuid4()
        self.__time = datetime.now()
        self.__total_coin = total_coin
        self.__amount = amount
        
    def get_transaction_coin_id(self):
        return self.__transaction_coin_id

    def get_time(self):
        return self.__time

    def get_total_coin(self):
        return self.__total_coin

    def set_total_coin(self, total_coin):
        self.__total_coin = total_coin
        
    def get_amount(self):
        return self.__amount

    def set_amount(self, amount):
        self.__amount = amount