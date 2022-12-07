# from app.models import db, Follower
# import os
# environment = os.getenv("FLASK_ENV")
# SCHEMA = os.environ.get("SCHEMA")

# # Adds a demo user, you can add other users here if you want
# def seed_followers():
#     follower1 = Follower(user_id=1, follower_id=2)
#     follower2 = Follower(user_id=1, follower_id=2)
#     follower3 = Follower(user_id=2, follower_id=3)
#     db.session.add(follower1)
#     db.session.add(follower2)
#     db.session.add(follower3)

#     db.session.commit()


# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and RESET IDENTITY
# # resets the auto incrementing primary key, CASCADE deletes any
# # dependent entities
# def undo_followers():
#     db.session.execute('TRUNCATE followers RESTART IDENTITY CASCADE;')

#     if environment == "production":
#         db.session.execute(
#             f"TRUNCATE table {SCHEMA}.followers RESTART IDENTITY CASCADE;")
#     else:
#         db.session.execute("DELETE FROM followers")
#     db.session.commit()
