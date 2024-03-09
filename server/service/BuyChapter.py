from service.TransactionChapter import TransactionChapter
from service.TransactionAuthor import TransactionAuthor

class BuyChapter:
    def __init__(self) -> None:
        pass
    
    def buy_chapter(self, chapter, cartoon_name):
        transaction = TransactionChapter(chapter.get_chapter_id(), cartoon_name, chapter.get_number_chapter(), chapter.get_coin())
        author = TransactionAuthor(chapter.get_chapter_id(), cartoon_name, chapter.get_number_chapter(), chapter.get_coin())
        return transaction, author