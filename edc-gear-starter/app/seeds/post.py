from app.models import db, Post


# Adds a demo user, you can add other users here if you want
def seed_posts():
    post1 = Post(
        user_id=1, image_url="https://images.squarespace-cdn.com/content/v1/54ecbbfae4b0a4e937ba1b5c/1634928966520-P2NHLGLJEO8IIDQ1592M/Target+EDC+IG.jpg?format=300w", body="The Best EDC Gear From Target")
    post2 = Post(
        user_id=2, image_url="https://images.squarespace-cdn.com/content/v1/54ecbbfae4b0a4e937ba1b5c/1634259590567-YFATF2Y339OJIBGYEON0/79E34820-6710-40C4-B9F6-482D0F1875B1+-+Roland+Spitzer.jpeg?format=300w", body="Nurse’s Blackout Carry - Roland")
    post3 = Post(
        user_id=3, image_url="https://images.squarespace-cdn.com/content/v1/54ecbbfae4b0a4e937ba1b5c/1634577693304-T0O6D97N5NM93HKXLHBB/IMG_E5016%2B-%2Bjoel%2Bkerr.jpg?format=300w", body="Dependable Stonewashed Carry")

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
