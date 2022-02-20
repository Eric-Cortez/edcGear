from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(username='Demo', email='demo@aa.io', password='password', image_url='https://static.vecteezy.com/system/resources/previews/000/573/125/original/sign-of-mountain-icon-vector.jpg')
    marnie = User(username='Marnie', email='marnie@aa.io', password='password',
                  image_url='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.vectorstock.com%2Fi%2F1000x1000%2F57%2F41%2Falphabet-letter-m-logo-icon-design-vector-12535741.jpg&f=1&nofb=1')
    bobbie = User(username='Bobbie', email='bobbie@aa.io', password='password',image_url='https://cdn.shopify.com/s/files/1/0095/0976/5198/products/Best_Damn_EDC_GPT_grande.jpg?v=1562011394')
    serge = User(username='Sergee', email='Sergee@aa.io', password='password', image_url='http://www.sergeknives.com/wpimages/wp725a329f_05_06.jpg')
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
