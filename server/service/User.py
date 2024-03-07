from service.Account import Account

class User(Account):
    def __init__(self, username, password, status=False, coin=0) -> None:
        super().__init__(username, password, status)
        self.__coin = coin
        self.__card_info = []
        self.__all_transaction_info = []
        self.__all_transaction_chapter = []
        self.__all_transaction_coin = []