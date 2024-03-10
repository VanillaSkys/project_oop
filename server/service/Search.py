import re

class Search:
    def __init__(self, search) -> None:
        self.__search = search
    
    def search_cartoon_by_all(self, cartoons, authors, categorys):
        response = []
        for cartoon in cartoons:
            if re.search(self.__search.upper(), cartoon.get_name_cartoon().upper()):
                response.append(cartoon.get_name_cartoon())
        for category in categorys:
            if re.search(self.__search.upper(), category.get_category_name().upper()):
                for cartoon in category.show_cartoon_list():
                    response.append(cartoon['name'])
        for author in authors:
            if re.search(self.__search, author.get_author_name()):
                for cartoon in author.show_cartoon_list():
                    response.append(cartoon['name'])
        return response