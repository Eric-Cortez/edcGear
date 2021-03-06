from app.models import db, Comment


# Adds a demo user, you can add other users here if you want
def seed_comments():
    comment1 = Comment(user_id=5, post_id=1, body="Best EDC1")
    comment2 = Comment(user_id=2, post_id=2, body="Best EDC2")
    comment3 = Comment(user_id=3, post_id=3, body="Best EDC3")
    
    comment4 = Comment(user_id=7, post_id=2, body="Nice ๐ ๐ ๐ ๐  coin")
    comment5 = Comment(user_id=2, post_id=8, body="#GondekEDC")
    comment6 = Comment(user_id=3, post_id=7, body="Dope scales")
    
    comment7 = Comment(user_id=4, post_id=2, body="#PM ๐")
    comment8 = Comment(user_id=4, post_id=8, body="Nice wallet ๐ฅ")
    comment9 = Comment(user_id=4, post_id=7, body="Is that an exclusive?๐")
    comment10 = Comment(user_id=4, post_id=5, body="๐")
    
    comment11 = Comment(user_id=5, post_id=2, body="#ODgreen ๐ฅ")
    comment12 = Comment(user_id=5, post_id=8, body="#leather")
    comment13 = Comment(user_id=5, post_id=7, body="What type of blade steel?")
    comment14 = Comment(user_id=5, post_id=6,
                       body="The pioneer is great for a light carry ๐๏ธ")
    
    comment15 = Comment(user_id=6, post_id=2, body="Cool bead ๐ฅ")
    comment16 = Comment(user_id=6, post_id=8, body="is that a Ti pen?")
    comment17 = Comment(user_id=6, post_id=6, body="nice shot")
    comment18 = Comment(user_id=6, post_id=5, body="Great setup")
    
    comment19 = Comment(user_id=7, post_id=2, body="EDC and morning coffee๐")
    comment20 = Comment(user_id=7, post_id=8, body="Always good to have a carry flashlight")
    comment21 = Comment(user_id=7, post_id=4, body="All gray ๐")
    
    
    comment22 = Comment(user_id=3, post_id=35, body="What kind of pen is that?")
    
    comment23 = Comment(user_id=2, post_id=36, body="Those mini lights are the best")
    comment24 = Comment(user_id=4, post_id=36, body="G2 pens ๐ฅ๐ฅ")
    comment25 = Comment(user_id=7, post_id=36, body="Nice setup")
    
    
    comment26 = Comment(user_id=1, post_id=37, body="Nice watch")
    comment27 = Comment(user_id=7, post_id=37, body="Thanks man")
    
    comment28 = Comment(user_id=2, post_id=38, body="Cool carry")
    comment29 = Comment(user_id=1, post_id=38, body="Happy Birthday ๐๐ ")
    comment30 = Comment(user_id=7, post_id=38, body="How is the lume on that watch?")
    comment31 = Comment(user_id=6, post_id=38, body="All gray ๐")


    
    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.add(comment11)
    db.session.add(comment12)
    db.session.add(comment13)
    db.session.add(comment14)
    db.session.add(comment15)
    db.session.add(comment16)
    db.session.add(comment17)
    db.session.add(comment18)
    db.session.add(comment19)
    db.session.add(comment20)
    db.session.add(comment21)
    db.session.add(comment22)
    db.session.add(comment23)
    db.session.add(comment24)
    db.session.add(comment25)
    db.session.add(comment26)
    db.session.add(comment27)
    db.session.add(comment28)
    db.session.add(comment29)
    db.session.add(comment30)
    db.session.add(comment31)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
