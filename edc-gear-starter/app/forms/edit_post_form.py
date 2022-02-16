from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError


class EditPostForm(FlaskForm):
    image_url = StringField('image_url', validators=[DataRequired("Please provide a valid image URL")])
    body = TextAreaField('body')
    submit = SubmitField('submit')
