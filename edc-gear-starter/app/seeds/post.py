from app.models import db, Post


# Adds a demo user, you can add other users here if you want
def seed_posts():
    post1 = Post(
        user_id=5, image_url="https://i1.wp.com/cms.sofrep.com/wp-content/uploads/2018/05/DSC03614.jpg?ssl=1", body="#Seiko#SKX007")
    post2 = Post(
        user_id=5, image_url="https://images.squarespace-cdn.com/content/v1/54ecbbfae4b0a4e937ba1b5c/1634175881990-58ZTKDDIGG9YO1YQX4S1/DSC03640+-+Tord+Larsen.jpg?format=1000w", body="#edcGear ☕️ ")
    post3 = Post(
        user_id=5, image_url="https://cdn.blessthisstuff.com/imagens/stuff/gatura-edc-pocket-pouch.jpg", body="#CarryPouch")
    post4 = Post(
        user_id=5, image_url="https://images.squarespace-cdn.com/content/v1/54ecbbfae4b0a4e937ba1b5c/1634259590567-YFATF2Y339OJIBGYEON0/79E34820-6710-40C4-B9F6-482D0F1875B1+-+Roland+Spitzer.jpeg?format=1000w", body="#CRKT")
    post5 = Post(
        user_id=5, image_url="https://images.squarespace-cdn.com/content/v1/54ecbbfae4b0a4e937ba1b5c/1634577693304-T0O6D97N5NM93HKXLHBB/IMG_E5016+-+joel+kerr.JPG?format=1000w", body="#MightyHanks 🙌🏽 🙌🏽 🙌🏽 !")
    post6 = Post(
        user_id=5, image_url="https://cdn.shopify.com/s/files/1/0258/3566/7561/products/SA0820123R-Black-Pioneer-Open_2048x.jpg?v=1599160479", body="Swiss Army Pioneer - classic")
    post7 = Post(
        user_id=5, image_url="https://ae01.alicdn.com/kf/HTB1zp0OlY3nBKNjSZFMq6yUSFXaW.jpg", body="💥Spyderco PM💥")
    post8 = Post(
        user_id=5, image_url="https://images.squarespace-cdn.com/content/v1/54ecbbfae4b0a4e937ba1b5c/1634223426196-IDH8IE3X1AZECHVNC54Y/23713EE7-C63D-4B22-AFCD-0721093957DA+-+Kin+Dioquino.jpeg?format=1000w", body="new carry 🔥🔥🔥🔥 ")
    post9 = Post(
        user_id=5, image_url="https://www.watchgecko.com/wp/wp-content/uploads/2020/12/Luminox-Lifestyle-1200.jpg", body="#Serge#EDC")
    
    post10 = Post(
        user_id=7, image_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Frainydaymagazine.com%2Fwp%2Fwp-content%2Fuploads%2F2017%2F10%2FEDC_UpdateAll.jpg&f=1&nofb=1", body="#favCarry")
    post11 = Post(
        user_id=4, image_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.texantel.com.my%2Fimage%2Ftexantel%2Fimage%2Fcache%2Fdata%2Fall_product_images%2Fproduct-431%2Fi3tb-2-1080x810.jpg&f=1&nofb=1", body="#fridayCarry")
    post12 = Post(
        user_id=6, image_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0095%2F0976%2F5198%2Fproducts%2FBDEDC_RUK-2_1024x.jpg%3Fv%3D1560828559&f=1&nofb=1", body="#BestEDC")
    post13 = Post(
        user_id=7, image_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F54ecbbfae4b0a4e937ba1b5c%2F1578427987601-3LDZEG8KF6J6OYHUJOEP%2FCasey%2BWilliams.jpg&f=1&nofb=1", body="#Friday")
    post14 = Post(
        user_id=2, image_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0095%2F0976%2F5198%2Fcollections%2FSprybar_1200x1200.jpg%3Fv%3D1564599377&f=1&nofb=1", body="#EDCWeek")
    post15 = Post(
        user_id=2, image_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F40bennfnr8j31.jpg&f=1&nofb=1", body="#365")
    post16 = Post(
        user_id=3, image_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F54ecbbfae4b0a4e937ba1b5c%2F1528484509888-CTQNIN5IS03TKBD6QCS9%2Fk3yidaqneuizg00ifmt7.jpg&f=1&nofb=1", body="#New")
    post17 = Post(
        user_id=4, image_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FYvFnnevEK1s%2Fmaxresdefault.jpg&f=1&nofb=1", body="#AllGray")
    post18 = Post(
        user_id=6, image_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fg4308xxff1s41.jpg&f=1&nofb=1", body="#Leather")
    post19 = Post(
        user_id=7, image_url="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fatomic811.com%2Fwp-content%2Fuploads%2F2016%2F07%2FTimex-Expedition-Camper-Best-EDC-Watch.jpg&f=1&nofb=1", body="field notes")
    post20 = Post(
        user_id=5, image_url="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftheawesomer.com%2Fphotos%2F2016%2F10%2Fbest_edc_1.jpg&f=1&nofb=1", body="new gift")


    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)
    db.session.add(post5)
    db.session.add(post6)
    db.session.add(post7)
    db.session.add(post8)
    db.session.add(post9)
    db.session.add(post10)
    db.session.add(post11)
    db.session.add(post12)
    db.session.add(post13)
    db.session.add(post14)
    db.session.add(post15)
    db.session.add(post16)
    db.session.add(post17)
    db.session.add(post18)
    db.session.add(post19)
    db.session.add(post20)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
