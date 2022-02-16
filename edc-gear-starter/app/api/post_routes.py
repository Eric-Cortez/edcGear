from flask import Blueprint, request
from flask_login import login_required
from app.models import Post, db, User
from app.forms import AddPostForm
from sqlalchemy.orm import joinedload

post_routes = Blueprint("posts", __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


#GET ALL POSTS 

@post_routes.route('/')
def all_posts():
    # GET Route for all posts
    # sorted in desc order 
    posts = Post.query.order_by(Post.id.desc()).all()
    return {'posts': [post.to_dict() for post in posts]}
