from flask import Blueprint, request
from flask_login import login_required
from app.models import Comment, db
from app.forms import AddCommentForm, EditCommentForm
from sqlalchemy.orm import joinedload
from datetime import datetime

comment_routes = Blueprint("comments", __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages




#GET ONE COMMENTS
@comment_routes.route('/<int:commentId>')
@login_required
def one_posts(commentId):
    # GET Route for one comment
    comment = Comment.query.get(commentId)

    return comment.to_dict()




# # EDIT COMMENT
# @comment_routes.route('/<int:postId>', methods=['PUT'])
# # @login_required
# def edit_post(postId):
#     data = request.json
#     form = EditPostForm()
#     form['csrf_token'].data = request.cookies['csrf_token']

#     currentPost = Post.query.get(postId)
#     if form.validate_on_submit() and currentPost:
#         currentPost.body = form.data['body']
#         currentPost.updated_at = datetime.now()

#         db.session.commit()
#         return currentPost.to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# # DELETE COMMENT
# @comment_routes.route('/<int:postId>', methods=["DELETE"])
# # @login_required
# def delete_post(postId):
#     current_post = Post.query.get(postId)
#     db.session.delete(current_post)
#     db.session.commit()
#     return {"message": "Delete Successful"}
