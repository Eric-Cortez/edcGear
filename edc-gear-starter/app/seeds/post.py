from app.models import db, Post


# Adds a demo user, you can add other users here if you want
def seed_posts():
    post1 = Post(
        user_id=3, image_url="https://i1.wp.com/cms.sofrep.com/wp-content/uploads/2018/05/DSC03614.jpg?ssl=1", body="#Seiko#SKX007")
    post2 = Post(
        user_id=4, image_url="http://www.sergeknives.com/IMG_4164a.JPG", body="#Serge#EDC")
    post3 = Post(
        user_id=5, image_url="https://cdn.blessthisstuff.com/imagens/stuff/gatura-edc-pocket-pouch.jpg", body="#CarryPouch")
    
    post4 = Post(
        user_id=1, image_url="https://images.squarespace-cdn.com/content/v1/54ecbbfae4b0a4e937ba1b5c/1634259590567-YFATF2Y339OJIBGYEON0/79E34820-6710-40C4-B9F6-482D0F1875B1+-+Roland+Spitzer.jpeg?format=1000w", body="#CRKT")
    post5 = Post(
        user_id=2, image_url="https://images.squarespace-cdn.com/content/v1/54ecbbfae4b0a4e937ba1b5c/1634577693304-T0O6D97N5NM93HKXLHBB/IMG_E5016+-+joel+kerr.JPG?format=1000w", body="#MightyHanks 🙌🏽 🙌🏽 🙌🏽 !")
    post6 = Post(
        user_id=7, image_url="https://cdn.shopify.com/s/files/1/0258/3566/7561/products/SA0820123R-Black-Pioneer-Open_2048x.jpg?v=1599160479", body="Swiss Army Pioneer - classic")
    post7 = Post(
        user_id=6, image_url="https://ae01.alicdn.com/kf/HTB1zp0OlY3nBKNjSZFMq6yUSFXaW.jpg", body="💥Spyderco PM💥")
    post8 = Post(
        user_id=7, image_url="https://images.squarespace-cdn.com/content/v1/54ecbbfae4b0a4e937ba1b5c/1634223426196-IDH8IE3X1AZECHVNC54Y/23713EE7-C63D-4B22-AFCD-0721093957DA+-+Kin+Dioquino.jpeg?format=1000w", body="new carry 🔥🔥🔥🔥 ")
    post9 = Post(
        user_id=5, image_url="https://images.squarespace-cdn.com/content/v1/54ecbbfae4b0a4e937ba1b5c/1634175881990-58ZTKDDIGG9YO1YQX4S1/DSC03640+-+Tord+Larsen.jpg?format=1000w", body="#edcGear ☕️ ")
 


    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)
    db.session.add(post5)
    db.session.add(post6)
    db.session.add(post7)
    db.session.add(post8)
    db.session.add(post9)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
