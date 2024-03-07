from service.Account import Account

class User(Account):
    def __init__(self, username, password, status=False, coin=0) -> None:
        super().__init__(username, password, status)
        self.__coin = coin
        self.__all_transaction_chapter = []
        self.__all_transaction_coin = []
    
    def get_coin(self):
        return self.__coin
    
    def add_coin(self, coin):
        self.__coin += coin
        
    def sub_coin(self, coin):
        self.__coin -= coin
        
    def add_chapter(self, chapter):
        self.__coin += chapter
        
    def get_all_transaction_coin(self):
        return self.__all_traKsnsaction_coin
    
    def add_all_transaction_coin(self, transaction):
        self.__all_transaction_coin.append(transaction)
        
    def get_all_transaction_chapter(self):
        return self.__all_transaction_chapter
    
    def add_all_transaction_chapter(self, transaction):
        self.__all_transaction_chapter.append(transaction)
        
    def show_transaction_coin(self):
        return [{"transaction_coin_id": transaction.get_transaction_coin_id(), "time": transaction.get_time(), "total_coin": transaction.get_total_coin(), "amount": transaction.get_amount()} for transaction in self.__all_transaction_coin]
    
    def show_transaction_chapter(self):
        return [{
            "transaction_chapter_id": transaction.get_transaction_chapter_id(),
            "chapter_id": transaction.get_chapter_id(),
            "time": transaction.get_time(),
            "cartoon_name": transaction.get_cartoon_name(),
            "chapter_number": transaction.get_chapter_number(),
            "chapter_coin": transaction.get_chapter_coin()
        } for transaction in self.__all_transaction_chapter]
            