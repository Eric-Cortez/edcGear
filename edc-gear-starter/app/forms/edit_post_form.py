from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError


class EditPostForm(FlaskForm):
    body = TextAreaField('body')
    submit = SubmitField('submit')
