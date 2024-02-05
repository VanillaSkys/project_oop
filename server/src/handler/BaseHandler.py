import datetime
class BaseHandler(Exception):
    def __init__(self, message, code = 417):
        super().__init__(message)
        self.__message = message
        self.__code = code

    def to_dict(self, message, code = 417):
        return {
            'timestamp': datetime.datetime.now().isoformat(),
            'status': ( code if code != 417 else self.__code),
            'error': str(self.__message + message)
        }