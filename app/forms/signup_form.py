from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


def validate_url(form, field):
    image_url = field.data
    if "http" not in image_url or "." not in image_url:
        raise ValidationError('Please enter a valid url.')
    
def email_length(form, field): 
    new_email = field.data
    if len(new_email) > 255:
        raise ValidationError("Email must be less than 255 characters.")
    
def username_length(form, field):
    new_username = field.data
    if len(new_username) > 40: 
        raise ValidationError("Username must be less than 40 characters.")
    
def image_url_length(form,field):
    new_image_url = field.data
    if (len(new_image_url) > 255):
        raise ValidationError("Image url must be less than 255 characters")

class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists, username_length])
    email = StringField('email', validators=[DataRequired(), user_exists, email_length])
    password = StringField('password', validators=[DataRequired()])
    image_url = StringField('image_url', validators=[DataRequired(), validate_url, image_url_length])
