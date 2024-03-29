from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy import func

class Post(db.Model):
    __tablename__ = 'posts'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    image_url = db.Column(db.String(255), nullable=False)
    body = db.Column(db.Text)
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    
    user = db.relationship(
        "User", back_populates="post")
    comment = db.relationship(
        "Comment", back_populates="post", cascade="all,delete-orphan")
    like = db.relationship(
        "Like", back_populates="post", cascade="all,delete-orphan")
    

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'image_url': self.image_url,
            'body': self.body,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
