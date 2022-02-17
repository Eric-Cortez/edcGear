# from nis import cat
# from typing import List
# from flask import Blueprint
# from sqlalchemy import func
# from app.models import Product, Category

# search_routes = Blueprint('search', __name__)


# @search_routes.route('/posts/<search_query>')
# def category_search(search_query):
#     categories = Category.query.filter(func.lower(
#         Category.name) == func.lower(search_query))
#     return {'categories': [category.to_dict() for category in categories]}


# @search_routes.route('/comments/<search_query>')
# def product_search(search_query):
#     products = Product.query.filter(func.lower(
#         Product.name).like(f'%{search_query.lower()}%'))
#     return {'products': [product.to_dict() for product in products]}



# for future use in case we implement user detail page
# @search_routes.route('/users/<search_query>')
# def user_search(search_query):
#     users = User.query.filter(func.lower(User.username) == func.lower(search_query) or func.lower(User.username).like(f'%{search_query.lower()}%'))
#     return {'users': [user.to_dict() for user in users]}
