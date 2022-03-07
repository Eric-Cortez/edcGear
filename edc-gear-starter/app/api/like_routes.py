from flask import Blueprint, request
from flask_login import login_required
from app.models import Like, db, Comment, Post
from app.forms import EditCommentForm, AddCommentForm
from sqlalchemy.orm import joinedload
from datetime import datetime

like_routes = Blueprint("likes", __name__)


#GET ALL likes 
@like_routes.route('/')
@login_required
def all_likes():
    # GET Route for all likes
    likes = Like.query.all()
    return {'likes': [like.to_dict() for like in likes]}

# #GET ALL likes - for Post
# @like_routes.route('/posts')
# # @login_required
# def all_likes_post():
#     # GET Route for all likes
#     likes = Like.query.filter(Like.post_id.isnot(None)).all()
#     return {'likes': [like.to_dict() for like in likes]}

# #GET ALL likes - for comments
# @like_routes.route('/comments')
# @login_required
# def all_likes_comment():
#     # GET Route for all likes
#     likes = Like.query.filter(Like.comment_id.isnot(None)).all()
#     return {'likes': [like.to_dict() for like in likes]}



# add a like
@like_routes.route('/', methods = ['POST'])
@login_required
def post_like():
    data = request.json
    newLike = Like(
        user_id = data["user_id"],
        post_id = data["post_id"],
        created_at = datetime.now()
)
    db.session.add(newLike)
    db.session.commit()
    return newLike.to_dict()



# remove a like
@like_routes.route('/<int:likeId>/unlike', methods=["DELETE"])
@login_required
def delete_like(likeId):
    like = Like.query.get(likeId)
    if like:
        db.session.delete(like)
        db.session.commit()
        return { "message": "Delete Successful" }
