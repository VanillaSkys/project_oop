from flask import Flask, request, jsonify, abort, send_file
from flask_cors import CORS
from flask_swagger_ui import get_swaggerui_blueprint
from controller.CartoonManagementController import CartoonManagementController
from service.Guest import Guest
from service.Admin import Admin
from service.Category import Category
from service.Author import Author
from uuid import uuid4

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
    category_type = ['action', 'romance']
    author_name = ['fill', 'boat']
    guest = Guest()
    admin = Admin()
    category_all = [Category(uuid4(), category)for category in category_type]
    author_all = [Author(uuid4(), author)for author in author_name]
    return guest, admin, category_all, author_all

guest, admin, category_all, author_all = create_instance()
cartoon_controller = CartoonManagementController(guest, admin)
cartoon_controller.set_category(category_all)
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
    if isinstance(response, dict):
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
    
@app.get('/get_cartoon')
def get_cartoon():
    name_cartoon = request.args.get('cartoon')
    response = cartoon_controller.get_cartoon(name_cartoon=name_cartoon)
    return response, 200

# @app.get('/all_cartoon')
# def get_all_cartoon():
#     name_category = request.args.get('category')
#     response = cartoon_controller.get_all_cartoon(name_category)
#     return response, 200
@app.get('/all_cartoon')
def get_all_cartoon():
    response = cartoon_controller.get_all_cartoon()
    return response, 200

@app.get('/all_cartoon_category')
def get_all_cartoon_category():
    name_category = request.args.get('category')
    response = cartoon_controller.get_all_cartoon_category(name_category)
    return response, 200


@app.post('/post_cartoon')
def upload_image():
    if 'image_cartoon' not in request.files:
        return jsonify({'error': 'No file part'})
    name_cartoon, author, category = request.form.get('name_cartoon'),request.form.get('author'),request.form.getlist('category')
    # print(name_cartoon, author, category)
    file_cartoon, file_main, file_bg = request.files['image_cartoon'],request.files['image_main'], request.files['image_background']
    response = cartoon_controller.post_cartoon(name_cartoon, author, category, file_cartoon, file_main, file_bg)
    
    if response == 'Success':
        return {"message": response}, 200
    else:
        return response, 401


@app.post('/post_chapter')
def upload_file():
    if 'files[]' not in request.files:
        return jsonify({'error': 'No file part'})

    files = request.files.getlist('files[]')
    name_cartoon, name_chapter,coin = request.form.get('name_cartoon'), request.form.get('name_chapter'),request.form.get('coin')
    response = cartoon_controller.post_chapter(name_cartoon, name_chapter, coin, files)

    return jsonify({'message': 'Files uploaded successfully'})

@app.get('/get_category')
def get_category():
    response = cartoon_controller.map_category()
    return response

@app.get('/get_chapter')
def get_chapter():
    name_cartoon, chapter = request.args.get('cartoon'),request.args.get('chapter')
    response = cartoon_controller.get_chapter(name_cartoon, chapter)
    return response, 200

@app.post('/buy_coin')
def buy_coin():
    username, total_coin, amount = request.json.get('username'), request.json.get('total_coin'), request.json.get('amount')
    response = cartoon_controller.buy_coin(username, total_coin, amount)
    # Return the QR code image to the client
    cartoon_controller.get_account()
    if isinstance(response, dict):
        return response
    else:
        return send_file(response, mimetype='image/png')
    # return "success"

if __name__ == '__main__':
    app.run(debug=True)