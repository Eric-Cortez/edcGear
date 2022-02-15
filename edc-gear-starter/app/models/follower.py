# from .db import db
# from sqlalchemy import func


# class Follower(db.Model):
#     __tablename__ = 'followers'

#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
#     follower_id = db.Column(
#         db.Integer, db.ForeignKey("users.id"), nullable=False)
#     created_at = db.Column(db.DateTime(timezone=True),
#                            server_default=func.now(), nullable=False)
#     updated_at = db.Column(db.DateTime(timezone=True),
#                            server_default=func.now(), nullable=False)
#     user = db.relationship(
#         "User", back_populates="follower")
 

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'user_id': self.user_id,
#             'follower_id': self.follower_id,
#             'created_at': self.created_at,
#             'updated_at': self.updated_at
#         }
