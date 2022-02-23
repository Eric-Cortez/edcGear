from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, ValidationError


def validate_url(form, field):
    image_url = field.data
    if "http" not in image_url or "." not in image_url:
        raise ValidationError('Please enter a valid url.')



class AddPostForm(FlaskForm):
    image_url = StringField('image_url', validators=[DataRequired(), validate_url])
    body = TextAreaField('body')
    submit = SubmitField('submit')
    
