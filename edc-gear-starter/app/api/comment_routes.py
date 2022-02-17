from flask import Blueprint, request
from flask_login import login_required
from app.models import Comment, db
from app.forms import EditCommentForm, AddCommentForm
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

#GET ALL COMMENTS
@comment_routes.route('/')
# @login_required
def all_comments():
    # GET Route for all commnets
    # sorted in desc order
    commnets = Comment.query.order_by(Comment.id.asc()).all()
    return {'comments': [comment.to_dict() for comment in commnets]}



# POST A NEW COMMENT
@comment_routes.route('/', methods=['POST'])
@login_required
def post_new_comment_on_post():
    data = request.json
    form = AddCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = Comment(
            user_id=data["user_id"],
            post_id=data["post_id"],
            body=form.data['body'],
            created_at=datetime.now())
        db.session.add(comment)
        db.session.commit()
        return comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#GET ONE COMMENTS
@comment_routes.route('/<int:commentId>')
@login_required
def one_comment(commentId):
    # GET Route for one comment
    comment = Comment.query.get(commentId)

    return comment.to_dict()


# EDIT COMMENT
@comment_routes.route('/<int:commentId>', methods=['PUT'])
@login_required
def edit_comment(commentId):
    data = request.json
    form = EditCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    currentComment = Comment.query.get(commentId)
    if form.validate_on_submit() and currentComment:
        currentComment.body = form.data['body']
        currentComment.updated_at = datetime.now()

        db.session.commit()
        return currentComment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# DELETE COMMENT
@comment_routes.route('/<int:commentId>', methods=["DELETE"])
@login_required
def delete_comment(commentId):
    current_comment = Comment.query.get(commentId)
    db.session.delete(current_comment)
    db.session.commit()
    return {"message": "Delete Successful"}
