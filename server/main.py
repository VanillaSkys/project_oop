from flask import Flask, request, jsonify, abort
from flask_cors import CORS
from flask_swagger_ui import get_swaggerui_blueprint
from controller.CartoonManagementController import CartoonManagementController
from service.Guest import Guest

app = Flask(__name__)
CORS(app)

SWAGGER_URL="/swagger"
API_URL="/static/swagger.json"

swagger_ui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': 'Access API'
    }
)
app.register_blueprint(swagger_ui_blueprint, url_prefix=SWAGGER_URL)


cartoon_controller = CartoonManagementController(Guest())

@app.route('/')
def home():
    return "Hello My First Flask Project"

@app.post('/register')
def add_register():
    username, password = request.json.get('username'), request.json.get('password')
    response = cartoon_controller.register(username, password)
    if response:
        return jsonify({"message": "Register successful"})
    else:
        abort(401, response)
    
@app.post('/login')
def add_login():
    username, password = request.json.get('username'), request.json.get('password')
    response = cartoon_controller.login(username, password)
    if isinstance(response, dict)  :
        return {"message": response}
    else:
        abort(401, response)

@app.post('/logout')
def logout_user():
    username = request.json.get('username')
    response = cartoon_controller.logout(username)
    if response == "Logout success":
        return {"message": response}
    else:
        abort(401, response)
    
if __name__ == '__main__':
    app.run(debug=True)