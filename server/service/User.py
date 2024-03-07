from service.Account import Account

class User(Account):
    def __init__(self, username, password, status=False, coin=0) -> None:
        super().__init__(username, password, status)
        self.__coin = coin
        self.__all_transaction_chapter = []
        self.__all_transaction_coin = []
    
    def add_coin(self, coin):
        self.__coin += coin
        
    def sub_coin(self, coin):
        self.__coin -= coin
        
    def get_all_transaction_coin(self):
        return self.__all_transaction_coin
    
    def add_all_transaction_coin(self, transaction):
        self.__all_transaction_coin.append(transaction)