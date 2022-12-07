from app.models import db, Post
import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

# Adds a demo user, you can add other users here if you want
def seed_posts():
    post1 = Post(
        user_id=2, image_url="https://pbs.twimg.com/profile_images/565905879187210240/MFSwe7Hm_400x400.jpeg", body="#FieldNotes")
    post2 = Post(
        user_id=1, image_url="https://www.thecoolector.com/wp-content/uploads/2021/06/06-Warrior-mini-2-800%C3%976001.jpg", body="Olight")
    post3 = Post(
        user_id=4, image_url="https://live.staticflickr.com/7920/46166446485_c089c7ca72_b.jpg", body="")
    post4 = Post(
        user_id=7, image_url="https://cdn.everydaycarry.com/uploads/21-01-13/15fff1955c68ed.jpg", body="Ben Banter 🔥🔥🔥🔥🔥 ")
    post5 = Post(
        user_id=3, image_url="https://i.etsystatic.com/21005145/r/il/87105c/3371839058/il_1588xN.3371839058_23na.jpg", body="new scales")
    post6 = Post(
        user_id=5, image_url="https://i.imgur.com/fORGmLF.png", body="Lil Native Exclusive 🥑🥑🥑🥑🥑🥑🥑🥑🥑 ")
    post7 = Post(
        user_id=2, image_url="https://cdn.hiconsumption.com/wp-content/uploads/2020/01/Best-Uncommon-EDC-Gear-FB.jpg", body="")
    post8 = Post(
        user_id=6, image_url="https://i.pinimg.com/736x/64/11/06/64110651b936e91fd4cf271c4c589976.jpg", body="daily carry")
    post9 = Post(
        user_id=2, image_url="https://cdn.everydaycarry.com/uploads/15-05-25/155632d666f1fc.jpg", body="ODgreen")
    post10 = Post(
        user_id=1, image_url="https://cdn.everydaycarry.com/uploads/19-09-28/15d8fa9db44e2a.jpg", body="Casio DW-5600 🔥 ")
    post11 = Post(
        user_id=7, image_url="https://64.media.tumblr.com/0e452bf8bc56f9ab797e2a74cb530853/tumblr_npjtki7cbf1qfo8ieo1_1280.jpg", body="Pocket Dump 😎 ")
    post12 = Post(
        user_id=2, image_url="https://www.leatherman.com/on/demandware.static/-/Library-Sites-leatherman-shared2020/default/dw9cf3698a/landing-pages/giftcenter/edc/wave-plus-lifestyle.jpg", body="New addition")
    post13 = Post(
        user_id=1, image_url="https://i.ytimg.com/vi/1sPtKl00iDc/maxresdefault.jpg", body="Best Minimalist EDC Wallets 😎 😎 😎 ")
    post14 = Post(
        user_id=6, image_url="https://cdn.thecoolist.com/wp-content/uploads/2017/02/Hitch-Timber-EDC-Card-Caddy-tactical-wallet.jpg", body="Best wallet#365")
    post15 = Post(
        user_id=2, image_url="https://i.etsystatic.com/21493092/r/il/217cf9/3574646962/il_340x270.3574646962_dz69.jpg", body="Swiss Army Knife")
    post16 = Post(
        user_id=3, image_url="https://cdn.hiconsumption.com/wp-content/uploads/2021/12/Best-Field-Watches-0-Hero.jpg", body="Best Field watch 🙌🏼 ")
    post17 = Post(
        user_id=5, image_url="https://altonaer-silberwerkstatt.de/shop/media/image/ea/8e/74/Giant-Mouse_Europe-Coin_03_web_quadrat.jpg", body="Daily Challenge Coin 🪙 ")
    post18 = Post(
        user_id=4, image_url="https://i.ytimg.com/vi/mttGY0azjnY/maxresdefault.jpg", body="#edc#Olight ⚡⚡⚡ ")


    
    post19 = Post(
        user_id=3, image_url="https://i1.wp.com/cms.sofrep.com/wp-content/uploads/2018/05/DSC03614.jpg?ssl=1", body="#Seiko#SKX007")
    post20 = Post(
        user_id=5, image_url="https://images.squarespace-cdn.com/content/v1/54ecbbfae4b0a4e937ba1b5c/1634175881990-58ZTKDDIGG9YO1YQX4S1/DSC03640+-+Tord+Larsen.jpg?format=1000w", body="#edcGear ☕️ ")
    post21 = Post(
        user_id=5, image_url="https://cdn.blessthisstuff.com/imagens/stuff/gatura-edc-pocket-pouch.jpg", body="#CarryPouch")
    post22 = Post(
        user_id=5, image_url="https://images.squarespace-cdn.com/content/v1/54ecbbfae4b0a4e937ba1b5c/1634259590567-YFATF2Y339OJIBGYEON0/79E34820-6710-40C4-B9F6-482D0F1875B1+-+Roland+Spitzer.jpeg?format=1000w", body="#CRKT")
    post23 = Post(
        user_id=5, image_url="https://images.squarespace-cdn.com/content/v1/54ecbbfae4b0a4e937ba1b5c/1634577693304-T0O6D97N5NM93HKXLHBB/IMG_E5016+-+joel+kerr.JPG?format=1000w", body="#MightyHanks 🙌🏽 🙌🏽 🙌🏽 !")
    post24 = Post(
        user_id=5, image_url="https://cdn.shopify.com/s/files/1/0258/3566/7561/products/SA0820123R-Black-Pioneer-Open_2048x.jpg?v=1599160479", body="Swiss Army Pioneer - classic")
    post25 = Post(
        user_id=5, image_url="https://ae01.alicdn.com/kf/HTB1zp0OlY3nBKNjSZFMq6yUSFXaW.jpg", body="💥Spyderco PM💥")
    post26 = Post(
        user_id=5, image_url="https://images.squarespace-cdn.com/content/v1/54ecbbfae4b0a4e937ba1b5c/1634223426196-IDH8IE3X1AZECHVNC54Y/23713EE7-C63D-4B22-AFCD-0721093957DA+-+Kin+Dioquino.jpeg?format=1000w", body="new carry 🔥🔥🔥🔥 ")
    post27 = Post(
        user_id=5, image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROm8AbTkeV7m23GzWvZzwkjHC_gq78YJlkOA&usqp=CAU", body="#Serge#EDC")
    
    post28 = Post(
        user_id=7, image_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Frainydaymagazine.com%2Fwp%2Fwp-content%2Fuploads%2F2017%2F10%2FEDC_UpdateAll.jpg&f=1&nofb=1", body="#favCarry")
    post29 = Post(
        user_id=4, image_url="https://cdn11.bigcommerce.com/s-efe0x2hvzk/images/stencil/1280x1280/products/8788/40167/C81GP2.1__58874.1637682261.gif?c=2", body="#fridayCarry")
    post30 = Post(
        user_id=6, image_url="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/seiko-prospex-turtle-review-2-1657913132.jpg?crop=1.00xw:0.752xh;0,0.159xh&resize=1200:*", body="#BestEDC")
    post31 = Post(
        user_id=7, image_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F54ecbbfae4b0a4e937ba1b5c%2F1578427987601-3LDZEG8KF6J6OYHUJOEP%2FCasey%2BWilliams.jpg&f=1&nofb=1", body="#Friday")
    post32 = Post(
        user_id=2, image_url="https://cdn11.bigcommerce.com/s-efe0x2hvzk/images/stencil/1280x1280/products/23771/45155/BM430BK.4__07605.1658255350.jpg?c=2", body="#EDCWeek")
    post33 = Post(
        user_id=2, image_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F40bennfnr8j31.jpg&f=1&nofb=1", body="#365")
    post34 = Post(
        user_id=3, image_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F54ecbbfae4b0a4e937ba1b5c%2F1528484509888-CTQNIN5IS03TKBD6QCS9%2Fk3yidaqneuizg00ifmt7.jpg&f=1&nofb=1", body="#New")
    post35 = Post(
        user_id=4, image_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FYvFnnevEK1s%2Fmaxresdefault.jpg&f=1&nofb=1", body="#AllGray")
    post36= Post(
        user_id=6, image_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fg4308xxff1s41.jpg&f=1&nofb=1", body="#Leather")
    post37 = Post(
        user_id=7, image_url="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fatomic811.com%2Fwp-content%2Fuploads%2F2016%2F07%2FTimex-Expedition-Camper-Best-EDC-Watch.jpg&f=1&nofb=1", body="field notes")
    post38 = Post(
        user_id=5, image_url="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftheawesomer.com%2Fphotos%2F2016%2F10%2Fbest_edc_1.jpg&f=1&nofb=1", body="B-day gift")
    









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
    db.session.add(post21)
    db.session.add(post22)
    db.session.add(post23)
    db.session.add(post24)
    db.session.add(post25)
    db.session.add(post26)
    db.session.add(post27)
    db.session.add(post28)
    db.session.add(post29)
    db.session.add(post30)
    db.session.add(post31)
    db.session.add(post32)
    db.session.add(post33)
    db.session.add(post34)
    db.session.add(post35)
    db.session.add(post36)
    db.session.add(post37)
    db.session.add(post38)
    
  
    
    
   

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM posts")
    
    db.session.commit()
