from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import sys
sys.path.append('./src')
from src.controller.MainController import MainController
from src.handler.BaseHandler import BaseHandler
load_dotenv()
import datetime
app = Flask(__name__)
CORS(app)
port = os.getenv("port")

if __name__ == "__main__":
    mainController = MainController(app) 
    app.run(debug=True, port=port)