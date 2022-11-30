from flask_wtf import FlaskForm
from wtforms import SubmitField, TextAreaField



class EditPostForm(FlaskForm):
    body = TextAreaField('body')
    submit = SubmitField('submit')
