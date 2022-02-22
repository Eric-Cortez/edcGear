from nis import cat
from typing import List
from flask import Blueprint
from sqlalchemy import func
from app.models import User, Post

search_routes = Blueprint('search', __name__)


#  returns result if user name maches exactly case insensitive 
@search_routes.route('/content/<search_query>')
def users_search(search_query):
    
    #  query for exact match   
    # users = User.query.filter(func.lower(User.username) == func.lower(search_query)).all()
    users = User.query.filter(func.lower(User.username).like(f'%{search_query.lower()}%'))
    posts = Post.query.filter(func.lower(Post.body).like(f'%{search_query.lower()}%'))
    
    return {'users': [user.to_dict() for user in users], 'posts': [post.to_dict() for post in posts]}

# @search_routes.route('/posts/<search_query>')
# def post_search(search_query):
#     posts = Post.query.filter(func.lower(Post.body).like(f'%{search_query.lower()}%'))
#     return {'posts': [post.to_dict() for post in posts]}










