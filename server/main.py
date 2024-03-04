from flask import Flask, request, jsonify, abort
from flask_cors import CORS
from flask_swagger_ui import get_swaggerui_blueprint
from controller.CartoonManagementController import CartoonManagementController
from service.Guest import Guest
from service.Admin import Admin
from service.Cartoon import Cartoon
app = Flask(__name__, static_url_path="/static", static_folder="public")
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

def create_instance():
    guest = Guest()
    admin = Admin()
    return guest, admin

guest, admin = create_instance()
cartoon_controller = CartoonManagementController(guest, admin)

cartoon_folder = 'public/cartoon'
# app.config['cartoon_folder'] = cartoon_folder

@app.post('/post_cartoon')
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'})
    name_cartoon, author, category = request.form.get('name_cartoon'),request.form.get('author'),request.form.getlist('category')
    # print(name_cartoon, author, category)
    file = request.files['image']
    response = cartoon_controller.post_cartoon(name_cartoon, author, category, file)
    
    if response == 'Success':
        return {"message": response}, 200
    else:
        return response, 401
    
@app.route('/')
def home():
    return "Hello My First Flask Project"

@app.post('/register')
def add_register():
    username, password = request.json.get('username'), request.json.get('password')
    response = cartoon_controller.register(username, password)
    if response == 'Register successful':
        return jsonify({"message": "Register successful"}),200
    else:
        return response, 401
    
@app.post('/login')
def add_login():
    username, password = request.json.get('username'), request.json.get('password')
    response = cartoon_controller.login(username, password)
    if isinstance(response, dict)  :
        return response
    else:
        return response, 401

@app.post('/logout')
def logout_user():
    username = request.json.get('username')
    response = cartoon_controller.logout(username)
    if response == "Logout success":
        return {"message": response}
    else:
        abort(401, response)
    
@app.get('/all_cartoon')
def get_all_cartoon():
    response = cartoon_controller.get_all_cartoon()
    return response, 200

if __name__ == '__main__':
    app.run(debug=True)