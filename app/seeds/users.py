from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(username='Demo', email='demo@aa.io', password='password', image_url='https://static.vecteezy.com/system/resources/previews/000/573/125/original/sign-of-mountain-icon-vector.jpg')
    marnie = User(username='Marnie', email='marnie@aa.io', password='password',
                  image_url='https://cdn5.vectorstock.com/i/1000x1000/73/69/gold-circle-letter-s-logo-vector-14957369.jpg')
    bobbie = User(username='Bobbie', email='bobbie@aa.io', password='password',image_url='https://cdn.shopify.com/s/files/1/0095/0976/5198/products/Best_Damn_EDC_GPT_grande.jpg?v=1562011394')
    serge = User(username='Sergee', email='Sergee@aa.io', password='password', image_url='https://cdn.shopify.com/s/files/1/0575/7177/products/edc-wallet-crazy-horse-brown-2_2048x.jpg?v=1552328919')
    bladeHH = User(username='bladeHH', email='bladeHH@aa.io', password='password', image_url='https://www.bladehq.com/images/BHQLogos/BHQ-Shield-LightBG-Color.jpg')
    spyder = User(username='Spyder', email='spyder@aa.io', password='password', image_url='https://i.pinimg.com/originals/62/d8/41/62d84190f11bdc95c28090e95417c9be.jpg')
    bench = User(username='Bench', email='bench@aa.io', password='password', image_url='https://www.knifeblog.com/wp-content/uploads/2015/08/benchmade-logo.jpg')
    
    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(serge)
    db.session.add(bladeHH)
    db.session.add(spyder)
    db.session.add(bench)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
