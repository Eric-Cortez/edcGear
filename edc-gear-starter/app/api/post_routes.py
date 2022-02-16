from turtle import update
from flask import Blueprint, request
from flask_login import login_required
from app.models import Post, db, Comment
from app.forms import AddPostForm, EditPostForm
from sqlalchemy.orm import joinedload
from datetime import datetime

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
@login_required
def all_posts():
    # GET Route for all posts
    # sorted in desc order 
    posts = Post.query.order_by(Post.id.desc()).all()
    return {'posts': [post.to_dict() for post in posts]}


#GET ONE POST
@post_routes.route('/<int:postId>')
@login_required
def one_posts(postId):
    # GET Route for one post
    post = Post.query.get(postId)
    
    return post.to_dict()



# POST A NEW POST 
@post_routes.route('/', methods=['POST'])
@login_required
def post_post():
    data = request.json
    form = AddPostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post = Post(
            user_id=data["user_id"],
            image_url=form.data["image_url"],
            body=form.data['body'],
            created_at= datetime.now()
        )
        db.session.add(post)
        db.session.commit()
        return post.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# EDIT Post 
@post_routes.route('/<int:postId>', methods=['PUT'])
@login_required
def edit_post(postId):
    data = request.json
    form = EditPostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    currentPost = Post.query.get(postId)
    if form.validate_on_submit() and currentPost:
        currentPost.body = form.data['body']
        currentPost.updated_at = datetime.now()

        db.session.commit()
        return currentPost.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# DELETE Post 
@post_routes.route('/<int:postId>', methods=["DELETE"])
@login_required
def delete_post(postId):
    current_post = Post.query.get(postId)
    db.session.delete(current_post)
    db.session.commit()
    return { "message": "Delete Successful"}



#-------------------------------------------------------------------------#

#GET ALL COMMENTS FOR A SPECIFIC POST
@post_routes.route('/<int:postId>/comments')
# @login_required
def all_comment_on_post(postId):
    # GET Route for all comments
    # sorted in asc order
    comments = Comment.query.filter(Comment.post_id == postId).order_by(Comment.id.asc()).all()
    return {'comments': [comment.to_dict() for comment in comments]}
