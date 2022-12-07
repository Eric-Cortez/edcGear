from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy import func


class Like(db.Model):
    __tablename__ = 'likes'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("posts.id")))
    comment_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("comments.id")))
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())

    user = db.relationship(
        "User", back_populates="like")
    post = db.relationship(
        "Post", back_populates="like")
    comment = db.relationship(
        "Comment", back_populates="like")
    

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'post_id': self.post_id,
            'comment_id': self.comment_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
