from flask_sqlalchemy import SQLAlchemy

import os

environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get('SCHEMA')

db = SQLAlchemy()



def add_prefix_for_prod(attr):
    """adds a prefix to table names in production environment only"""
    if environment == "production":
        return f"{SCHEMA}.{attr}"
    else:
        return attr