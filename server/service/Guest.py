from service.Account import Account
import json
import os

class Guest(Account):
    def __init__(self) -> None:
        super().__init__()

    def register(self, username, password, account):
        for user in account:
            if user.get_username() == username:
                return "Username already exists"
        if username != 'admin':
            new_account = Account(username, password)
            return new_account
        return 'Dont use it'
        # return {"username":username,"password":password, "status": False}