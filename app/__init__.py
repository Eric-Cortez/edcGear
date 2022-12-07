import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager
from app.seeds.comment import seed_comments
from app.seeds.post import seed_posts
from app.seeds.users import seed_users
from app.seeds.like import seed_likes

from .models import db, User
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.post_routes import post_routes
from .api.comment_routes import comment_routes
from .api.search_route import search_routes
from .api.like_routes import like_routes
from .api.image_routes import image_routes

from .seeds import seed_commands

from .config import Config

app = Flask(__name__, static_folder='../react-app/build', static_url_path='/')

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(post_routes, url_prefix='/api/posts')
app.register_blueprint(comment_routes, url_prefix="/api/comments")
app.register_blueprint(search_routes, url_prefix="/api/search")
app.register_blueprint(like_routes, url_prefix="/api/likes")
app.register_blueprint(image_routes, url_prefix="/api/images")

db.init_app(app)

# drop all tables, create tables, and seed all             
# def seed():
#     """Seed all database functions"""
#     seed_users()
#     seed_posts()
#     seed_comments()
#     seed_likes()


# with app.app_context():
#             db.drop_all()
#             db.create_all()
#             app.logger.info('Initialized the database!')
#             # print("========>", db.session.query(User, username='Demo'))
#             # if not db.session.query(User):
#             seed()
#             app.logger.info('seeded database!')

Migrate(app, db)

# Application Security
CORS(app)


# Since we are deploying with Docker and Flask,
# we won't be using a buildpack when we deploy to Heroku.
# Therefore, we need to make sure that in production any
# request made over http is redirected to https.
# Well.........
@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie(
        'csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
        samesite='Strict' if os.environ.get(
            'FLASK_ENV') == 'production' else None,
        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico') 
        # return app.send_from_directory('public', 'favicon.ico')
    return app.send_static_file('index.html')
