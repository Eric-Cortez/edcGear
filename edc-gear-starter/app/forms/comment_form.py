from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Comment


class CommentForm(FlaskForm):
    body = TextAreaField('body', validators=[DataRequired("Please provide a comment")])
    submit = SubmitField('submit')
