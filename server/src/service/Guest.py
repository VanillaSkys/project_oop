from src.service.Account import Account
import json
import os

class Guest(Account):
    def __init__(self, username = None, password = None) -> None:
        super().__init__(username, password)

    async def register(self, username, password, account):
        for user in account:
            if user['username'] == username:
                return "Username already exists"
        return {"username":username,"password":password}